 // packages
 
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


// Utiles
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
 

dotenv.config();
const port = process.env.PORT || 5300;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//app.get("/", (req, res) => {
//  res.send("API is running....");
//});



app.use("/api/users",userRoutes);	



app.listen(port, () => console.log(`Server running on port: ${port}`));
