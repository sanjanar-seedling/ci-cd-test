const express = require("expresss");
const app = express();

app.get("/", (req, res) => {
  res.send("AI CI/CD working!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
