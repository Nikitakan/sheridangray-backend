const express= require("express")
const app=express()
const {APP_PORT}=require("./config/app.config")
const connectDB= require("./config/database")
const YAML = require("yamljs");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerJsDocs = YAML.load("./documentation/swagger.yaml");

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')); 
app.use(express.static("uploads"));

//connect the DB
connectDB()

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsDocs));

require('./routers')(app)

app.listen(APP_PORT,()=>{
    console.log(`Server is running on port ${APP_PORT}`)
})