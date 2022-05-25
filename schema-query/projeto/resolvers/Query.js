const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Basta reotornar uma string'
    },

    horaAtual() {
        return new Date
    },

    usuarioLogado() {
        return {
            id: 1,
            nome: 'Rebeca Bertolini',
            idade: 25,
            email: 'teste@teste.com',
            //esse modelo de descrição não é aceito(salario_real), sendo necessário fazer um resolver para associar um com o outro.
            salario_real: 5000.00,
            vip: true
        }
    },

    produtoEmDestaque() {
        return {
            nome: 'Computador',
            preco: 3200.50,
            desconto: 200.50
        }
    },

    numerosMegaSena() {
        //return [4, 8, 13, 56, 34, 26]
        const crescente = (a, b) => a - b
        return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },

    usuarios() {
        return usuarios
    },
    //primeiro parâmetro é o parant, o segundo são os argumentos que foram passados na consulta(query). Neste caso arg recebe o ID (está desconstruido)
    usuario(_, { id }) {
        //aqui acessa e filtra o array de usuarios, verificando se o id de cada usuário, bate com o dado na pesquisa.
        const selecionados = usuarios.filter(u => u.id === id)
        //se selecionados encontrar um id, retornará o primeiro indice encontrado, se não, retornará null.
        return selecionados ? selecionados[0] : null
    },

    perfis() {
        return perfis
    },

    perfil(_, { id }) {
        const selecionados = perfis.filter(p => p.id === id)
        return selecionados ? selecionados[0] : null
    }
}