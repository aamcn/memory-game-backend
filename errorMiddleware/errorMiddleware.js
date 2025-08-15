

// Error handling middleware
function errorHandler(err, req, res, next){
  console.error("Error:", err.message);
  // Log the error details
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
  // Call the next middleware
  next();
};

module.exports = { errorHandler };

