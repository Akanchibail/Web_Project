const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const userRoutes = require("./server/routes/user");
const noteRoutes = require("./server/routes/note");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use("/users", userRoutes);
app.use("/notes", noteRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!!!`));