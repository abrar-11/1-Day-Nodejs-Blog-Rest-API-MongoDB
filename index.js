const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");


app.use(express.json());

// connected to Database ...
const connectDB = require("./database/db");

// Authentication Routes
app.use("/auth/api/", authRoutes);

// User Routes
app.use("/user/", userRoutes);



connectDB().then(() => {
   app.listen(port, () => console.log("Database Connected Successfully. server is listing on Port: ",port));
}).catch(err=>console.log("Server Failed . No connection to Database"));

