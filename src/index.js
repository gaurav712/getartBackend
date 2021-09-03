require("dotenv").config();
const express = require("express");
const productRoute = require("./routes/Product");
const app = express();

const port = process.env.PORT || 5000;

/* Use JSON */
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* Enable CORS while testing */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/* Routes */
app.use("/products", productRoute);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at ${port}`);
});
