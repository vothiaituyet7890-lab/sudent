const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App đang chạy trên Railway!");
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server started")
);
