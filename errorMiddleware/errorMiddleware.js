// errorMiddleware.js

function errorHandler(err, req, res, next){
  console.error("Error:", err.message);

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
    next();
};

module.exports = { errorHandler };

