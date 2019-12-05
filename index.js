const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT, connection } = require("./config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ massage: "welcome to mysql api" });
});

app.use("/todos", require("./routes/todos"));
app.use("/users", require("./routes/users"));

connection.connect(function(err) {
  if (err) {
    console.log("error connect: " + err.stak);
    return;
  }
  console.log("connect database");
});

app.listen(PORT, () => {
  console.log(`This listen on PORT ${PORT}`);
});
