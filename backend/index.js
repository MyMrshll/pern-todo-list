const express = require("express");
const app = express();
const port = process.env.PORT || 2100;
require("dotenv").config();
const cors = require("cors");
const route = require("./src/routes/todos");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  }) 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
