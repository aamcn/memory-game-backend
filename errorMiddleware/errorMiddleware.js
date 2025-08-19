// Error handling middleware
function errorHandler(err, req, res) {
  console.error("Error:", err.message);
  // Log the error details
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
}

module.exports = { errorHandler };
