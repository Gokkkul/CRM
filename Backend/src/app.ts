import { AppDataSource } from "./config/data-source";
import express from 'express';
import 'reflect-metadata'
import { userRouter } from "./routes/user.routes";
import dotenv from 'dotenv'

dotenv.config();

const app = express();

AppDataSource.initialize()
.then(() => console.log("Database Connected Successfully...!"))
.catch((error) => console.log(`Database not connected...! Error: ` + error))


app.use(express.json())

app.use('/users', userRouter );

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started...!");
})


