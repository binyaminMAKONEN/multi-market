const express = require('express');
const cors = require('cors');
const app = express();
const productRouter =require('./routes/productRouter')
const storeRouter =require('./routes/storeRouter')
const orderRouter =require('./routes/orderRouter')
const userRouter =require('./routes/userRouter')
const userAuthRouret =require('./routes/userAuthRouret')

require('dotenv').config()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const connect =require('./db/connection')

// app.use(require('./routes/route'))

app.use('/api/products',productRouter)
app.use('/api/stores',storeRouter)
app.use('/api/orders',orderRouter)
app.use('/api/users',userRouter)
app.use('/',userAuthRouret)


connect.then(db =>{
    if(!db)return process.exit(1)
    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`)
    })
    app.on('error',err => console.log(`Failed To Connect wite HTTP Server:${err}`))
}).catch(error =>{
    console.log(`connection Failed ${error}`);
}) 