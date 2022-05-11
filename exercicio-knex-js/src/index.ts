import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import {getActorByName, getActorById, getActorByGender, createActor, updateSalary, deleteActor, cadastraFilme, tabelaFilmes, searchFilmes} from './data'



const app = express();
app.use(express.json());
app.use(cors());


 // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//     console.log(await getActorById("001"))
// })()

// Ou então podemos chamá-la dentro de um endpoint


app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await connection("Actor")
        res.status(201).send({ message: result })
    }
    catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/actor/busca/nome/:name", async (req: Request, res: Response):Promise<void> => {
    try {
        
        const nome = req.params.name as string
        const result = await getActorByName(nome)
        res.status(201).send({ message: result })


    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await getActorById(id)
        res.status(200).send({ message: result })

    } catch (error:any) {
        console.log(error.sqlMessage || error.message)
        res.status(500).send("Unexpected error")
    }
})

app.get("/actor/busca/genero/:gender", async (req: Request, res:Response):Promise<void>=> {
    try{
        const gender = req.params.gender
        const result = await getActorByGender(gender)
        res.status(201).send({ message: result })

    }
    catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


app.post("/actor/inserir", async (req: Request, res: Response):Promise<void>=>{
    try{
        await createActor(
            req.body.name,
            req.body.salary,
            req.body.birthDate,
            req.body.gender
        )

        res.status(200).send({message: "Ator criado com sucesso"})

    }
    catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.put("/actor/atualizar", async (req: Request, res: Response)=>{
    try{
        await updateSalary(
            req.body.id, 
            req.body.salary
        )
        res.status(200).send({message: "Salário atualizado"})
    }
    catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.delete("/actor/excluir/:id", async(req: Request, res: Response)=>{
    try{
        await deleteActor(req.params.id)
        res.status(200).send({message: "Conta encerrada"})
    }
    catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})


//---TABELA FILMES ----

app.post("/movie/cadastrar", async (req: Request, res: Response):Promise<void>=>{
    try{
        await cadastraFilme(
            req.body.id,
            req.body.nome,
            req.body.sinopse,
            req.body.dataLancamento,
            req.body.avalicacao
        )

        res.status(200).send({message: "Filme cadastrado com sucesso"})

    }
    catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/movie/all", async(req:Request, res:Response)=>{
    try{
        const result = await tabelaFilmes()
        res.status(200).send({mesage: result})

    }
    catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


app.get("/movie/search", async(req: Request, res: Response):Promise<void>=>{
    try{
        const result = await searchFilmes(
            req.query.query as string
        )
        
        res.status(200).send({movies: result})

    }
    catch (error:any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

//servidor

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is runnig in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server`)
    }
})