import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"


dotenv.config();

const app = express()
const port = 5000;

// MIDDLEWARE
app.use(express.json()); // Middleware which allows me to accept JSON data in the req.body
app.use("/api/products", productRoutes) // Using the route endpoints in the middleware


// Route with controller function

console.log(process.env.MONGO_URI);


app.listen(port, () => {
    connectDB();
    console.log(`Server is listening at http://localhost:${port}`);
    
})
