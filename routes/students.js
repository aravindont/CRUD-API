const express = require("express");
const {
  getAllStudents,
  updateStudent,
  deleteStudent,
  createStudent,
  editStudent,
  getOneStudent,
} = require("../controllers/students.js");

const router = express.Router();

router.post("/createStudent", createStudent);

router.get("/allStudents", getAllStudents);

router.put("/updateStudent/:id", updateStudent);

router.delete("/deleteStudent/:id", deleteStudent);

router.patch("/editStudent/:id", editStudent);

// To get the specific student from the database

router.get("/getAStudent/:id", getOneStudent);

module.exports = router;
