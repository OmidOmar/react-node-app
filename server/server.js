const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));

const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Server!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
