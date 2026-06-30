const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require("./db/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express()

app.use(cors());
app.use(express.json())
connectDB()
app.use("/api/contact", contactRoutes);
app.use("/", ()=>{
    res.send("Running")
})

app.listen(3000, ()=>{
    console.log("server started")
})