const express = require("express");
const cors = require("cors");
const indexRoutes = require("./routes/indexRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", indexRoutes);
app.listen(process.env.PORT, () => {
  console.log("listening on", process.env.PORT);
});
