const { perfis } = require('../data/db')

module.exports = {
    //o primeiro parâmetro recebido é o objeto usuario
    salario(parent) {
        return parent.salario_real
    },
    perfil(usuario) {
        //quando pesquiso por perfil do usuário, irá me retornar o perfil que possui o mesmo ID que o usuário.
        const selecionados = perfis.filter(p => p.id === usuario.perfil_id)
        return selecionados ? selecionados[0] : null
    }
}