const express = require("express");
const indexRoutes = require("./routes/indexRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/", indexRoutes);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
