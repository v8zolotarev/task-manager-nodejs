const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());
app.use(express.static('./public'));

app.use('/app/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, console.log(`server is listening on ${port}...`))
    } catch (error){
        console.log(error)
    }
}

start()