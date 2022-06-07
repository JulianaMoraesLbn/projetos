import {conta} from './types'


export let contas: conta[] = [
    {
        nome:"Juliana Moraes",
        cpf:"112.272.637-67",
        dataNascimento:"15/4/1987",
        saldo:50,
        extrato: [
            {
                valor: 0,
                data: '30/04/2022',
                descricao:'nenhum gasto'
            }
        ]
    },
    {
        nome:"Thiago Ramos",
        cpf:"111.111.111-11",
        dataNascimento:"22/9/1977",
        saldo:40,
        extrato: [
            {
                valor: 0,
                data: '30/04/2022',
                descricao:'nenhum gasto'
            }
        ]
    }
]
