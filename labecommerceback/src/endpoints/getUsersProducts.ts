import {Request, Response} from 'express'
import {errors, sucess} from '../constants/constants'
import connection from '../data/connection'
import {v4 as generateId} from 'uuid'


export const getUsersProducts = async(req: Request, res: Response): Promise<void> =>{
    try{

        const {user_id} = req.params

        console.log(user_id)

        if(!user_id){
            throw new Error(errors.MISSING_PARAMETERS.message)
        }

        const result = await connection('table_labecommerce_purchases')
        .select('*')
        .where("user_id", user_id)

        res.status(sucess.SUCESS_OK.status).send(result)
    }
    catch(err: any){
        switch(err.message){
            case errors.AUTHORIZATION_NOT_FOUND.message:
                res.status(errors.AUTHORIZATION_NOT_FOUND.status).send(errors.AUTHORIZATION_NOT_FOUND.message)
                break;
            case errors.NOT_FOUND.message:
                res.status(errors.PLAYLIST_NOT_FOUND.status).send(errors.PLAYLIST_NOT_FOUND.message)
                break;            
            case errors.MISSING_PARAMETERS.message:
                res.status(errors.MISSING_PARAMETERS.status).send(errors.MISSING_PARAMETERS.message)
                break;
            default:
                res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
        }
    }
}