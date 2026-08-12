const rateLimit = require("express-rate-limit");

exports.rateLimiterMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." }
});