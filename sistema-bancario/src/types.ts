export type detalheExtrato = {
    valor: number,
    data: string,
    descricao: string
}


export type conta = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extrato: detalheExtrato[]
}

