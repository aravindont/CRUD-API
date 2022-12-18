const Student = require("../models/student.js");

exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(200).json({
      message: "saved student to database",
      savedStudent,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const oneStudent = await Student.findById(id);
    res.status(200).json(oneStudent);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndRemove(id, { new: true });
    res.status(200).json({
      message: "Deleted successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Edited successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
