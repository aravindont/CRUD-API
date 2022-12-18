const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  studentId: Number,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
