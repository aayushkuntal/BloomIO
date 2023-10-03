const express=require('express')
const app=express();
const dotenv=require('dotenv')
const cors = require('cors');
const connectDB=require('./config/db.js')
const authRoute=require('./routes/authRoute.js')
const userRoute=require('./routes/userRoute.js')
const chatRoute=require('./routes/chatRoute.js')
const messageRoute=require('./routes/messageRoute.js')  

//Dotenv
dotenv.config();  

//Connect DB
connectDB();

app.use(express.json())
// Enable CORS
app.use(cors());
// Configure allowed origins, methods, and headers
app.options('*', cors());

//Routes
app.use('/auth',authRoute);
app.use('/user',userRoute);
app.use('/chat',chatRoute);
app.use('/message',messageRoute);

//Port
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server started at port 3000");
})