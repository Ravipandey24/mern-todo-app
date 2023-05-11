require('dotenv').config()
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const todo = require("./routes/todo"); //routes
connectDB(); // connect database
app.use(cors({ origin: true, credentials: true })); 

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("server up and running"));
app.use("/api/todo", todo); //use routes

// setting up port
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

