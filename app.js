
const express = require('express')
const app = express();
const tasks = require("./routers/task");
const connectDb = require('./db/connect');
require('dotenv').config();
const notfound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorhandle');

const port = 3000;

app.use(express.json());
app.use(express.static('./public'));


// Routes
app.use('/api/v1/tasks', tasks);
app.use(notfound);
// app.use(errorHandlerMiddleware);
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Example app listening on http://localhost:${port}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}
start();
