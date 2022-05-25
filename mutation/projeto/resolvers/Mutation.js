const { usuarios, proximoId } = require('../data/db')
//Mutations são usadas quando quero gerar algum efeito colateral no banco de dados: deletar, alterar, adicionar informação.
module.exports = {
    //assim como na query, o primeiro parâmetro não recebe nada. O segundo recebo argumentos.
    //{ nome, email, idade} - poderia colocar assim no lugar de args
    novoUsuario(_, args) {
        //compara se há algum usuario com email igual ao que vier no args, se sim, ficará true:
        const emailExistente = usuarios.some(u => u.email === args.email)

        if(emailExistente) {
            throw new Error('E-mail já cadastrado')
        }

        //O objetivo é criar um novo usuário, adc no array de usuários com o método push.
        const novo = {
            id: proximoId(),
            ...args,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo)
        //pode receber resposta quando usa a mutation:
        return novo
    },

    excluiUsuario(_, { id }) {
        //busca o índice do usuário que possui id igual ao recebido. Se não achar, retorna -1, se achar retorna o indice
        const i = usuarios.findIndex(u => u.id === id)
        //se retornar -1 retorna null, se não prossegue
        if(i < 0) return null
        //o splice recebe primeiro um índice, depois a quantidade de elementos que serão excluidos e depois qual elemento será adc naquela posição.
        const excluidos = usuarios.splice(i, 1)
        //se excluidos tiver o elemento deletado, retorna ele, se não retorna null
        return excluidos ? excluidos[0] : null
    },

    alterarUsuario(_, args) {
        const i = usuarios.findIndex(u => u.id === args.id)
        if(i < 0) return null

        //outra forma de fazer a mudança. Permite fazer alguns tratamentos e verificações iniciais:
        //usuarios[i].nome = args.nome
        //usuarios[i].email = args.email
        //if(args.idade){
            //usuarios[i].idade = args.idade
        //}
        

        const usuario = {
            //todas as informações do usuario informado na mutation
            ...usuarios[i],
            //prevalece as informações que foram declaradas por último
            ...args
        }
        //remove o usuario identificado e coloca o novo usuário alterado.
        usuarios.splice(i, 1, usuario)
        return usuario
    }
}