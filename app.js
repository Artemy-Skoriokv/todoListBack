const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./src/routes/task");
const { PORT, MONGODB_URI, ALLOWED_ORIGINS} = require("./config");

const app = express();

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (ALLOWED_ORIGINS.indexOf(origin) > -1) {
    res.set("Access-Control-Allow-Origin", origin);
  }

  res.set(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  );
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Vary", "Origin");

  if (req.method === "OPTIONS") {
    return res.send("ok");
  }

  next();
});

app.use(express.json());
app.use("/", apiRoutes);

const loadApp = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

loadApp();
