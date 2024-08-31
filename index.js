import express from "express";
import morgan from "morgan";
import dotenv from "dotenv"
dotenv.config();

import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));

app.use('/api/auth', authRouter);

const port = process.env.PORT

// app.get('/test', (req, res) =>{
//     res.send('This is the respos from the server')
// })

// app.post('/api/users/register', (req, res) => {
//     res.send("This is the register route")
// })

app.listen(port, console.log(`server is running on port ${port} `))