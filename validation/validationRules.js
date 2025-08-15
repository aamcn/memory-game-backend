const { body, query, validationResult } = require("express-validator");


// Validation rules for adding high scorers
const addHighScorerValidation = [
  body("playerName")
    .notEmpty()
    .withMessage("Player name is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Player name must be between 1 and 50 characters")
    .trim()
    .escape(), // Sanitize to prevent XSS

  body("finishTime")
    .notEmpty()
    .withMessage("Finish time is required")
    .isLength({ min: 8, max: 8 })
    .withMessage("Finish time must be exactly 9 characters long"),
];

// Validation rules for getting score by ID
const getScoreByIdValidation = [
  query("id")
    .notEmpty()
    .withMessage("ID parameter is required")
    .isInt({ min: 1 })
    .withMessage("ID must be a positive integer"),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  addHighScorerValidation,
  getScoreByIdValidation,
  handleValidationErrors,
};
