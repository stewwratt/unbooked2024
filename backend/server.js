const express = require("express");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.send("Hello, Unbooked!");
});

app.listen(port, () => {
  console.log(`Backend service listening at http://localhost:${port}`);
});
