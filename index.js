import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './routes/book_route.js'
import cors from "cors"
import userRoute from "./routes/user_route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config(); 

const PORT = process.env.PORT || 4000;
const mongoURL = process.env.mongoURL;

//connect to mongo
try{
    mongoose.connect(mongoURL);
    console.log('mongoDB connected');
}catch(error){
    console.log("Error: ",error)
}

app.get("/",(req,res)=>{
    res.json("Hello From Book Hive");
});

app.use("/book",bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
