const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("patient", patientSchema);
