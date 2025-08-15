const express = require("express");
const router = express.Router();
const easyLeaderBoardRouter = router;
const easyLeaderBoardController = require("../controllers/easyLeaderBoardController");

//GET routes

easyLeaderBoardRouter.get(
  "/",
  easyLeaderBoardController.getEasyTest,
);

easyLeaderBoardRouter.get(
  "/all-easy-scores",
  easyLeaderBoardController.getAllEasyScores,
);
easyLeaderBoardRouter.get(
  "/easy-score-by-id",
  easyLeaderBoardController.getEasyScoreById,
);

// POST routes

easyLeaderBoardRouter.post(
  "/add-easy-top-scorer",
  easyLeaderBoardController.addEasyHighScorer,
);

module.exports = easyLeaderBoardRouter;
 