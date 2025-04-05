import { AppDataSource } from "./config/data-source";
import express from 'express';
import 'reflect-metadata'
import { userRouter } from "./routes/user.routes";
import dotenv from 'dotenv'
import { customerRouter } from "./routes/customer.routes";
import { emailLogRouter } from "./routes/emailLog.routes";
import { interactionRouter } from "./routes/interaction.routes";
import { leadRouter } from "./routes/lead.routes";
import { reportRouter } from "./routes/report.routes";
import { salesOpportunityRouter } from "./routes/salesOpportunity.routes";
import { taskRouter } from "./routes/task.routes";
import cors from 'cors'

dotenv.config();

const app = express();

app.use(cors())


AppDataSource.initialize()
.then(() => console.log("Database Connected Successfully...!"))
.catch((error) => console.log(`Database not connected...! Error: ` + error))


app.use(express.json())

app.use('/api/customer', customerRouter );
app.use('/api/email-log', emailLogRouter );
app.use('/api/interaction', interactionRouter );
app.use('/api/lead', leadRouter );
app.use('/api/report',reportRouter );
app.use('/api/sales-opportunity', salesOpportunityRouter );
app.use('/api/task', taskRouter );
app.use('/api/users', userRouter );

app.listen(Number(process.env.SERVER_PORT), () => {
    console.log("Server started...!", process.env.SERVER_PORT);
})



