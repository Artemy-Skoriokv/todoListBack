const { check } = require("express-validator");
const { validatorResult } = require("./validation-result");

const validationText = [
  check("text")
    .isString()
    .trim()
    .notEmpty(),
  validatorResult,
];

module.exports = {
  validationText,
};