const ApiError = require('../api-error');
const Contact = require('../models/contactModel');

exports.getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      status: 'success',
      result: contacts.length,
      data: {
        contacts,
      },
    });
  } catch (err) {
    return next(
      new ApiError(500, `An error occured while retrieving contacts`)
    );
  }
};
exports.createContact = async (req, res, next) => {
  try {
    const newContact = await Contact.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newContact,
      },
    });
  } catch (err) {
    return next(
      new ApiError(500, `An error occurred while creating the contact`)
    );
  }
};
exports.deleteAllContacts = async (req, res, next) => {
  try {
    await Contact.deleteMany();

    res.status(200).json({
      status: 'success',
      message: 'Delete all Contacts succesfully',
    });
  } catch (err) {
    return next(
      new ApiError(500, 'An error occurred while removing all contacts')
    );
  }
};
exports.getFavoriteContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find({ favorite: { $eq: true } });

    res.status(200).json({
      status: 'success',
      data: {
        contacts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
    return next(
      new ApiError(500, 'An error occurred while retrieving favorite contacts')
    );
  }
};
exports.getContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        contact,
      },
    });
  } catch (err) {
    return next(
      new ApiError(500, `Error retrieving contact with id=${req.params.id}`)
    );
  }
};
exports.updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        contact,
      },
    });
  } catch (err) {
    return next(
      new ApiError(500, `Error updating contact with id=${req.params.id}`)
    );
  }
};
exports.deleteContact = async (req, res, next) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      message: 'Delete contact succesfully',
    });
  } catch (err) {
    return next(
      new ApiError(500, `Could not delete contact with id=${req.params.id}`)
    );
  }
};
