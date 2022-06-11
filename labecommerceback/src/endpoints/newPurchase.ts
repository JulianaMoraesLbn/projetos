import {Request, Response} from 'express'
import {errors, sucess} from '../constants/constants'
import connection from '../data/connection'
import {v4 as generateId} from 'uuid'

// - `**id**`: string (PRIMARY KEY)
// - `**user_id**`: string (FOREIGN KEY) referencia uma `**id**` de `**labecommerce_users**`
// - `**product_id**`: string (FOREIGN KEY) referencia uma `**id**` de `**labecommerce_products**`
// - `**quantity**`: number
// - `**total_price**`: number

export const newPurchase = async(req: Request, res: Response): Promise<void> =>{
    try{

        const {user_id, product_id, quantity} = req.body

        if(!user_id || !product_id  || !quantity){
            throw new Error(errors.MISSING_PARAMETERS.message)
        }

        const product = await connection("table_labecommerce_products")
        .select("*")
        .where("id", product_id)

        console.log(product)

        const total_price = product.map((item)=>item.price*Number(quantity))

       console.log(total_price)

        await connection("table_labecommerce_purchases")
        .insert({id: generateId(), user_id, product_id, quantity: Number(quantity), total_price})

        console.log('foi')
        res.status(sucess.SUCESS_OK.status).send(sucess.SUCESS_OK.message)
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