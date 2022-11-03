const ApiError = require('../api-error');
const User = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      result: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    return next(new ApiError(500, 'An error occured while retrieving users'));
  }
};
exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newUser,
      },
    });
  } catch (error) {
    return next(new ApiError(500, 'An error occured while create the users'));
  }
};
