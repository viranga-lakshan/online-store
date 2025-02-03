 // packages
 
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


// Utiles
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
 

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
app.use("/api/category",categoryRoutes);



app.listen(port, () => console.log(`Server running on port: ${port}`));
