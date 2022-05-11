import connection from "./connection";

//Exemplo com raw
// export const getActorByName = async (name: string): Promise<any> => {
//     const result = await connection.raw(`
//         SELECT * FROM Actor WHERE name = '${name}'
//     `)

//     return result
// }


export const getActorByName = async (name: string): Promise<any> => {
    const result = await connection("Actor")
    .select("*")
    .whereLike("name", `%${name}%`)
    //.where("name", "like", `%${name}%`)
    //.where({name})  .where("name", name)

    return result
}


export const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
     SELECT * FROM Actor WHERE id = '${id}'     
    `)

    return result[0][0]
}

export const getActorByGender = async(gender: string):Promise<any> => {
    const result = await connection("Actor")
    .select("*")
    .where({gender})
    return result
}


export const createActor = async(name:string, salary:number, birthDate: Date, gender:string):Promise<void>=>{
    await connection.insert({
        id: Date.now().toString(),
        name,
        salary,
        birth_date: birthDate,
        gender
    })
    .into("Actor")    

    return console.log('Ator Inserido com Sucesso')
}

export const updateSalary = async(id:string, salary:number):Promise<void> =>{
    await connection("Actor")
    .update({salary})
    .where({id})

}


export const deleteActor = async(id:string):Promise<void> =>{
    await connection("Actor")
    .delete("*")
    .where({id})
    return console.log('Ator excluido com Sucesso')
}


export const mediaSalaryByGender = async(gender:string):Promise<void> =>{
    const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})
    console.log(result)
    return result[0].average
}

//----FILMES----

export const cadastraFilme = async(id:number, nome:string, sinopse:string, dataLancamento:Date, avaliacao:number):Promise<void>=>{
    await connection("Filmes")
    .insert({
        id,
        nome,
        sinopse,
        data_Lancamento: dataLancamento,
        avaliacao
    })
}

export const tabelaFilmes = async():Promise<any>=>{
    const result = await connection()
    .select("*")
    .from("Filmes")

    
    return result
  
}


export const searchFilmes = async(palavra:string):Promise<any> =>{
    let result = await connection("Filmes")
    .select("*")
    .whereILike('sinopse', `%${palavra}%`) 
    .orWhereILike('nome', `%${palavra}%`)
    console.log(result)

    return result
}