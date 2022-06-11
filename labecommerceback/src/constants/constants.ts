import { Request, Response } from "express";


export const errors: { [key: string]: { status: number, message: string } } = {

    AUTHORIZATION_NOT_FOUND: { status: 401, message: "Favor enviar headrs authorization." },
    NOT_FOUND: { status: 404, message: "Não encontrado" },
    MISSING_PARAMETERS: { status: 422, message: "Informação faltando. Consulte a documentação" },
    SOME_ERROR: { status: 500, message: "Algo deu errado" }

}


export const sucess: { [key: string]: { status: number, message: string } } = {

    SUCESS_OK: { status: 200, message: "Realizado com sucesso" },
    SUCESS_CREATE: { status: 201, message: "Criado com sucesso" }

}


// export const errorFunction = (res: Response, err:any) => {
//     switch(err.message){
//         case errors.AUTHORIZATION_NOT_FOUND.message:
//             res.status(errors.AUTHORIZATION_NOT_FOUND.status).send(errors.AUTHORIZATION_NOT_FOUND.message)
//             break;
//         case errors.NOT_FOUND.message:
//             res.status(errors.PLAYLIST_NOT_FOUND.status).send(errors.PLAYLIST_NOT_FOUND.message)
//             break;            
//         case errors.MISSING_PARAMETERS.message:
//             res.status(errors.MISSING_PARAMETERS.status).send(errors.MISSING_PARAMETERS.message)
//             break;
//         default:
//             res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
//     }
// }