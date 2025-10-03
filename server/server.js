const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectdb } = require("./config/db");
const authRoutes = require("./routes/v1/authRoutes");
const taskRoutes = require("./routes/v1/taskRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.listen(5000, () => {
  console.log("started server");
  connectdb();
});
