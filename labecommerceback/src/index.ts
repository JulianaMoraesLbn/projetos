import app from "./app"
import {createUser} from './endpoints/createUser'
import {getUsers} from './endpoints/getUsers'
import {getProducts} from './endpoints/getProducts'
import {createProducts} from './endpoints/createProducts'
import {newPurchase} from './endpoints/newPurchase'
import {getUsersProducts} from './endpoints/getUsersProducts'



app.post('/users', createUser)
app.get('/users', getUsers)
app.get('/products', getProducts)
app.post('/products', createProducts)
app.post('/purchase', newPurchase)
app.get('/users/:user_id/purchases', getUsersProducts)