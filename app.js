require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const hardLeaderBoardRouter = require("./routes/hardLeaderBoardRouter");
const mediumLeaderBoardRouter = require("./routes/mediumLeaderBoardRouter");
const easyLeaderBoardRouter = require("./routes/easyLeaderBoardRouter");
const errorHandler = require("./errorMiddleware/errorMiddleware");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

// Leaderboard routes
app.use("/easy-leader-board", easyLeaderBoardRouter);
app.use("/hard-leader-board", hardLeaderBoardRouter);
app.use("/medium-leader-board", mediumLeaderBoardRouter);

// Error handling middleware
app.use(errorHandler.errorHandler);

//Test route
app.get("/test", (req, res) => {
  res.send("Hello from the memory game back end!");
}); 


app.listen(port, () => {
  console.log(`Memory Game Backend listening on port ${port}`);
});