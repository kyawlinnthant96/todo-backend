const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/taskRoute');

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}
app.use("/api/v1/tasks", taskRoutes);

module.exports = app;
