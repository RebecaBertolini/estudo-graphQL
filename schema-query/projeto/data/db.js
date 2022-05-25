const perfis = [{
    id: 1,
    nome: 'comum'
}, {
    id: 2,
    nome: 'administrador'
}]

const usuarios = [{
    id: 1,
    nome: 'João Silva',
    idade: 29,
    email: "jsilva@zmail.com",
    perfil_id: 1,
    status: 'BLOQUEADO'
}, {
    id: 2,
    nome: 'Rafael Junior',
    idade: 30,
    email: 'rafajunior@ymail.com',
    perfil_id: 1,
    status: 'INATIVO'
}, {
    id: 3,
    nome: 'Danilo Reis',
    idade: 25,
    email: 'danrs@gmail.com',
    perfil_id: 2,
    status: 'ATIVO'
}

]

module.exports = { usuarios, perfis }