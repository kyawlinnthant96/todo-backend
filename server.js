const mongoose = require("mongoose")
const dotenv = require("dotenv");
const app = require("./app");


dotenv.config({ path: '.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'));



const port = process.env.PORT || 3000;
const server = app.listen(port,() => {
    console.log(`Server listening on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

