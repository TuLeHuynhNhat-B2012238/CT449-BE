const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './app/config.env' });
const app = require('./app');

const connectionString = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(connectionString).then(() => {
  console.log('DB connection succesful');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on post ${port}...`);
});
