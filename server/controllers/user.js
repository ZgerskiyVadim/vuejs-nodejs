/**
 * @module Users/Controller
 */
'use strict';
const User = require('../models/user');
const config = require('../../config');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

/**
 * Find all users in our data base.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Array} All users.
 */
function getAllUsers(req, res, next) {
  User.find({})
    .then(users => res.json(users))
    .catch(next);
}

/**
 * Get one user by id in our data base.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} Specific user.
 */
function getUserById(req, res, next) {
  User.findOne({_id: req.params.id}).then(user => {
    if (!user) {
      const error = new Error();
      error.message = 'Not Found!';
      error.status = 404;
      return next(error);
    }
    return res.json(user);
  }).catch(next);
}

/**
 * Create new user in our data base.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} Created user.
 */
function createUser(req, res, next) {
  const user = new User({
    userName: req.body.userName,
    city: req.body.city,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, config.secretKey),
    dispatch: req.body.dispatch
  });
  return user.save()
    .then(newUser => res.status(201).json(newUser))
    .catch(next);
}

/**
 * Authorization.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} Token, user.
 */
function loginUser(req, res, next) {
  User.findOne({email: req.body.email})
    .then(user => {
      const bytes = CryptoJS.AES.decrypt(user.password.toString(), config.secretKey);
      const plainPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (plainPassword === req.body.password.toString()) {
        delete user.password;
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // expires in 1 week
        });
        res.json({
          token,
          user
        });
      }
    })
    .catch();
}

/**
 * Update user by id in our data base.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} Modification information.
 */
function updateUser(req, res, next) {
  User.update({_id: req.params.id}, {
    $set: {
      userName: req.body.userName,
      city: req.body.city,
      email: req.body.email,
      dispatch: req.body.dispatch
    }
  })
    .then(modification => res.json(modification))
    .catch(next);
}

/**
 * Delete user by id in our data base.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {Object} Delete information.
 */
function removeUser(req, res, next) {
  User.remove({_id: req.params.id})
    .then(deleteInfo => res.json(deleteInfo))
    .catch(next);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
  loginUser
};
