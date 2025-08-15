require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const hardLeaderBoardRouter = require("./routes/hardLeaderBoardRouter");
const mediumLeaderBoardRouter = require("./routes/mediumLeaderBoardRouter");
const easyLeaderBoardRouter = require("./routes/easyLeaderBoardRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const port = 3000;

app.use("/easy-leader-board", easyLeaderBoardRouter);
app.use("/hard-leader-board", hardLeaderBoardRouter);
app.use("/medium-leader-board", mediumLeaderBoardRouter);

app.get("/test", (req, res) => {
  res.send("Hello from the memory game back end!");
}); 

app.listen(port, () => {
  console.log(`Memory Game Backend listening on port ${port}`);
});
