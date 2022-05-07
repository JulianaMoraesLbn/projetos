import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { contas } from './contas'
import { conta } from './types'

const app = express()
app.use(express.json())
app.use(cors())

const errorCode: number = 400
const successCode: number = 200

const dataAtual = new Date
const anoAtual = dataAtual.getFullYear()
const mesAtual = dataAtual.getMonth() + 1
const diaAtual = dataAtual.getDay() + 1

//visualizar todas as contas 
app.get('/contas', (req: Request, res: Response) => {

    try {

        res.status(successCode).send(contas)

    } catch (error) {
        res.status(errorCode).send(error)
    }
})

//verificar saldo passando cpf
app.get('/contas/cliente', (req: Request, res: Response) => {

    try {
        const { cpf } = req.body
        contas.forEach((cadaConta) => {

            if (cadaConta.cpf === cpf) {
                return res.status(successCode).send({ saldo: cadaConta.saldo })
            }
        })



    } catch (error) {
        res.status(errorCode).send(error)
    }
})

//criar conta nova
app.post('/contas/criar', (req: Request, res: Response) => {

    try {

        const { nome, cpf, dataNascimento, saldo, extrato } = req.body

        const novaConta: conta = {
            nome,
            cpf,
            dataNascimento,
            saldo,
            extrato
        }

        contas.push(novaConta)
        res.status(successCode).send('Cadastro concluido')

    } catch (error) {
        res.status(errorCode).send(error)
    }

})

//Adiciona Saldo
app.post('/contas/deposito', (req: Request, res: Response) => {

    try {

        const { cpf, saldo } = req.body

        contas.forEach((cadaConta) => {

            if (cadaConta.cpf === cpf) {
                cadaConta.saldo = cadaConta.saldo + saldo
                return res.status(successCode).send({ message: 'Deposito realizado com Sucesso' })
            }
        })


    } catch (error) {
        res.status(errorCode).send(error)
    }
})

//realizar pagamento
app.post('/contas/cliente/pagamentos', (req: Request, res: Response) => {
    try {

        const { cpf, valor, data, descricao } = req.body

        const novaData: string[] = data.split('/')
        const dia: number = Number(novaData[0])
        const mes: number = Number(novaData[1])
        const ano: number = Number(novaData[2])

        contas.forEach((cadaConta) => {

            if (cadaConta.cpf === cpf) {
                if (cadaConta.saldo >= valor) {
                    if (ano === anoAtual && mes >= mesAtual && dia >= diaAtual || data === isNaN || data === undefined) {
                        cadaConta.saldo -= valor
                        const newExtrato = {
                            valor,
                            data,
                            descricao
                        }
                        cadaConta.extrato.push(newExtrato)
                        return res.status(successCode).send({ message: 'Pagamento realizado com sucesso', newExtrato })
                    }
                    return res.status(successCode).send({ message: 'Data de pagamento não autorizada' })
                }
                return res.status(successCode).send({ message: 'Saldo insuficiente' })
            }
            return res.status(successCode).send({ message: 'Conta não localizada' })
        })


    } catch (error) {
        res.status(errorCode).send(error)
    }
})

//transferencia
app.post('/contas/transferencia', (req: Request, res: Response) => {

    try {

        const { cpfDestinatario, nomeDestinatario, cpfRemetente, nomeRemetente, valor } = req.body
        console.log('dentro do try')
        contas.forEach((cadaConta) => {
            console.log('entrou')
            if (cadaConta.cpf === cpfRemetente && cadaConta.saldo >= valor) {
                console.log('1 forEach', cadaConta.cpf)
                contas.forEach((contaDestinatario) => {
                    if (contaDestinatario.cpf === cpfDestinatario) {
                        cadaConta.saldo -= valor
                        contaDestinatario.saldo += valor

                        return res.status(successCode).send({ menssage: `Transferencia realizada com sucesso no valor de: ${valor} / Destinatário: ${nomeDestinatario} Remetente: ${nomeRemetente}` })
                    }
                })
            }
        })

    } catch (error) {
        res.status(errorCode).send(error)
    }
})

//colocar servidor de pé
const server = app.listen(process.env.PORT || 3003, () => {

    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando na porta http://localhost: ${address.port}`)
    } else {
        console.error(`Falha na inicialização do servidor`)
    }

})