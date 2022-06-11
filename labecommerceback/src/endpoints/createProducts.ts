import { Request, Response } from "express";
import { errors, sucess } from '../constants/constants'
import connection from "../data/connection";
import { v4 as generateId } from 'uuid'


export const createProducts = async (req: Request, res: Response): Promise<void> => {

    try {

        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            throw new Error(errors.MISSING_PARAMETERS.message)
        }

        await connection("table_labecommerce_products")
            .insert({ id: generateId(), name, price, image_url })

        res.status(sucess.SUCESS_CREATE.status).send(sucess.SUCESS_CREATE.message)
    }
    catch(err: any) {
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