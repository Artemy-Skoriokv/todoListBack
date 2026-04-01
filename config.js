const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000", "http://127.0.0.1:3000"];

module.exports = {
  PORT,
  MONGODB_URI,
  ALLOWED_ORIGINS,
};
