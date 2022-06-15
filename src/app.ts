import express from "express";
import morgan from "morgan";
import cors from 'cors'
//init
const app = express();

//settings
app.set("port", process.env.PORT || 3000)
//middleware
app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.get("/ping", (req,res)=>{
    res.send(`The server is running on http://localhost:${app.get("port")}`)
})

export default app 