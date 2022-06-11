import connection from './connection'
import users from './users.json'
import product from './product.json'


const printError = (error: any) => {
    console.log({ error })
    console.log('entrou no erro')
    console.log(error.sqlMessage || error.message)
}


//3 tabelas
//usuarios
//produtos
//controle de compras (purchases)
console.log('aqui')

//CRIEI AS TABELAS 1 A 1 - TODAS JUNTAS ESTÁ DANDO ERRO - CRIEI SEPARADA PARA CONSEGUIR CONTINUAR

const creatTables = () => connection

    .raw(`

        

        CREATE TABLE table_labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            total_price FLOAT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES table_labecommerce_users (id),
            FOREIGN KEY (product_id) REFERENCES table_labecommerce_products (id)

        );

        
        
    `)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)


const insertTables = () => connection("table_labecommerce_users")
    .insert(users)
    .then(() => { console.log('Usuários inseridos na tabela') })
    .catch(printError)

const creatTableProducts = () => connection("table_labecommerce_products")
    .insert(product)
    .then(() => { console.log('Produtos inseridos na tabela') })
    .catch(printError)

const closeConnection = () => { connection.destroy() }

//Chamando as funções
creatTables()
    //.then(insertTables)
    //.then(creatTableProducts)
    .then(()=>{console.log('tabela criada')})
    .finally(closeConnection)
    //quando a promessa termina o finally faz a limpeza / destroy() interrompe uma conexão