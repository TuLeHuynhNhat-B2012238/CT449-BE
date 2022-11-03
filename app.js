const express = require('express');
const ApiError = require('./app/api-error');
const contactRouter = require('./app/routes/contactRoutes');
const userRouter = require('./app/routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'Resource not found',
  });
  return next(new ApiError(404, 'Resource not found'));
});

app.use((err, req, res, netxt) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
