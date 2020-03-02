const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: true },
  contact_email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
