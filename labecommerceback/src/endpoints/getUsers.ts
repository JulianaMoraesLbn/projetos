import {Request, Response} from 'express'
import {errors, sucess} from '../constants/constants'
import connection from '../data/connection'



export const getUsers = async(req: Request, res: Response): Promise<void> =>{
    try{

        const result = await connection()
        .select("*")
        .from("table_labecommerce_users")

        if(!result){throw new Error(errors.SOME_ERROR.message)}
        res.status(sucess.SUCESS_OK.status).send(result)

    }
    catch(err:any){
        switch(err.message){
            case errors.AUTHORIZATION_NOT_FOUND.message:
                res.status(errors.AUTHORIZATION_NOT_FOUND.status).send(errors.AUTHORIZATION_NOT_FOUND.message)
                break;
            case errors.NOT_FOUND.message:
                res.status(errors.NOT_FOUND.status).send(errors.NOT_FOUND.message)
                break;            
            case errors.MISSING_PARAMETERS.message:
                res.status(errors.MISSING_PARAMETERS.status).send(errors.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
        }
    }
}