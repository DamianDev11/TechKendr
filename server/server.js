import express from "express";
import connectToDb from "./db/index.js";
import cors from "cors"
import dotenv from "dotenv"
import { subscribedUsers } from "./controller/Subscribe.js";

dotenv.config({
    path:".env"
})


const app = express();
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ 
    origin:"http://localhost:5173",
    credentials: true }));
app.set("trust proxy", 1);


app.get("/api/subscribe",(req,res)=>{
    res.send("<h1>hello World<h1>")
})
app.post("/api/subscribe",subscribedUsers)

Promise.all([connectToDb()])
  .then(() =>
    app.listen(port, () => console.log(`Server is running on PORT ${port}`))
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
