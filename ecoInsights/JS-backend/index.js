const express = require("express");
const app = express();
const router = require("./routes/routes");
const connectDb = require("./dbConnection");
const cors = require("cors");

connectDb();
app.use(cors());
app.use(express.json());
app.use("/",cors(), router);

app.listen(5000, () => {
  console.log("app is running");
});
