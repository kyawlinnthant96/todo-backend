const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/taskRoute');
const userRouter = require("./routes/userRoute");
const globalErrorHandler = require("./controllers/errorController")

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}
app.use("/api/v1/tasks", taskRoutes);
app.use('/api/v1/users', userRouter);
app.use(globalErrorHandler);

module.exports = app;
