import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const cadastrar = async (name: string, email: string) => {

    let resultado = await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    })

    console.log(`Usuário cadastrado:`)
    console.log(`Nome: ${resultado.name}, e-mail: ${resultado.email}`)
}


const buscarTodos = async () => {
    let resultado = await prisma.user.findMany()
    resultado.forEach(item => {
        console.log(`Usuário, id: ${item.id} nome: ${item.name}, e-mail: ${item.email}`)
    })
}

const buscarUsuario = async (idEspecifico: number) => {
    let item = await prisma.user.findUnique({
        where: {
            id: idEspecifico
        }
    })
    if (item) {
        console.log(`Usuário, id: ${item.id} nome: ${item.name}, e-mail: ${item.email}`)
    }
}

const excluirUsuario = async (idEspecifico: number) => {
    let item = await prisma.user.delete({
        where: {
            id: idEspecifico
        }
    })
    console.log(`Usuário excluído:`)
    console.log(`Usuário, id: ${item.id} nome: ${item.name}, e-mail: ${item.email}`)
}

let name = `Homem-Formiga`
let email = `hank.pym@avengers.com`
setTimeout(async () => { cadastrar(name, email) }, 1000);


let name2 = `Doutor Estranho`
let email2 = `stephen.strange@avengers.com`
setTimeout(async () => { cadastrar(name2, email2) }, 1000);

let name3 = `Steve Rogers`
let email3 = `steve.rogers@avengers.com`
setTimeout(async () => { cadastrar(name3, email3) }, 1000);

setTimeout(async () => { buscarTodos() }, 3000);

let idEspecifico = 2
setTimeout(async () => { buscarUsuario(idEspecifico) }, 3000);

setTimeout(async () => { excluirUsuario(idEspecifico) }, 3000);

setTimeout(async () => { buscarTodos() }, 6000);