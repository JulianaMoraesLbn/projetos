import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { send } from "process";

const app = express();
app.use(express.json());
app.use(cors());

//endpoint de teste
app.post("/actor", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection.raw(`
      INSERT INTO Actor(id, name, salary, birth_date, gender)
        VALUES(
          ${Date.now().toString()},
          "${req.body.name}",
          ${req.body.salary},
          "${req.body.birthDate}",
          "${req.body.gender}"            
        )
    `)

    res.status(201).send("Actor criado com sucesso!")
  }
  catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})


app.get("/actor", async (req: Request, res: Response):Promise<void> =>{
  try{
    //-----USANDO O RAW--------

    // const result = await connection.raw(`
    //   SELECT * FROM Actor
    // `)
    // res.status(201).send({message: result[0]})

    //----USANDO O QUERY BUILDER------------

    const result = await connection("Actor")
    res.status(201).send({message: result})
  }
  catch(error: any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

app.delete("/actor/:id", async (req: Request, res: Response):Promise<void> =>{
  try{
    //----USANDO O QUERY BUILDER------------

    await connection("Actor")
    .where({id: req.params.id})
    .delete()
    
    res.status(200).send({message: "Ator deletado"})
  }
  catch(error: any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})


app.put("/actor/:id", async (req: Request, res: Response):Promise<void> =>{
  try{
    await connection("Actor")
    .where({id: req.params.id})
    .update({
      name: req.body.name,
      salary: req.body.salary,
      birth_date: req.body.birthDate,
      gender: req.body.gender
    })
    
    res.status(200).send({message: "Ator alterado com sucesso!"})
  }
  catch(error: any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})



//servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

