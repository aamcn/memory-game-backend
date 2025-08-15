const express = require("express");
const router = express.Router();
const easyLeaderBoardRouter = router;
const easyLeaderBoardController = require("../controllers/easyLeaderBoardController");
const {
  addHighScorerValidation,
  getScoreByIdValidation,
  handleValidationErrors,
} = require("../validation/validationRules");

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
  getScoreByIdValidation,
  handleValidationErrors,
  easyLeaderBoardController.getEasyScoreById,
);

// POST routes

easyLeaderBoardRouter.post(
  "/add-easy-top-scorer",
  addHighScorerValidation,
  handleValidationErrors,
  easyLeaderBoardController.addEasyHighScorer,
);

module.exports = easyLeaderBoardRouter;
 