const express = require('express')
const router = express.Router()
const leaderBoardRouter = router
const leaderBoardController = require('../controllers/leaderBoardController')


leaderBoardRouter.get('/test', leaderBoardController.getTest)

module.exports = leaderBoardRouter

