require("dotenv").config();
const express = require("express");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errMiddleware");
connectDB();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server is Started on POST ${PORT}`));
