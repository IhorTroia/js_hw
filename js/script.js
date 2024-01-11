'use strict';

(function () {
  const attendanceEx1 = new Array(25).fill(null);
  const attendanceEx2 = new Array(25).fill(null);
  const attendanceEx3 = new Array(25).fill(null);

  const assessmentsEx1 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
  const assessmentsEx2 = [0, 50, 40, 100, 100, 0, 100, 0, 40, 100, 0, 20, 40, 20, 20, 100, 0, 0, 0, 0, 100, 50, 100, 0, 100];
  const assessmentsEx3 = [100, 100, 100, 90, 100, 100, 100, 100, 90, 100, 100, 100, 100, 90, 100, 100, 100, 100, 100, 100, 90, 100, 100, 100, 100];

  function Student(name, surname, yearOfBirth, assessments, attendance) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.assessments = assessments;
    this.attendance = attendance;
  }

  Student.prototype.getStudentsAge = function () {
    console.log(`${this.name} age is ${2024 - this.yearOfBirth}`);
  };

  Student.prototype.present = function () {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance.splice(i, 1, true);
        break;
      }
    }
    return this.attendance;
  };

  Student.prototype.absent = function () {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance.splice(i, 1, false);
        break;
      }
    }
    return this.attendance;
  };

  Student.prototype.gpa = function () {
    const sum = this.assessments.reduce((total, assessment) => total + assessment, 0);
    this.averageAssessments = sum / this.assessments.length;
    console.log(`GPA = ${this.averageAssessments}`);
    return this.averageAssessments;
  };

  Student.prototype.attendanceNumber = function () {
    this.attendanceQuantity = this.attendance.filter((item) => item === true).length;
    console.log(this.attendanceQuantity);
  };

  Student.prototype.summary = function () {
    if (this.averageAssessments > 90 && this.attendanceQuantity > 22) {
      console.log('Well Done!');
    } else if (this.averageAssessments < 90 && this.attendanceQuantity < 22) {
      console.log('Radish...');
    } else if (this.averageAssessments < 90 || this.attendanceQuantity < 22) {
      console.log('Good, but you can be better!');
    }
  };

  const ex1 = new Student('Anton', 'Botan', 2005, assessmentsEx1, attendanceEx1);
  ex1.getStudentsAge();
  for (let i = 0; i <= 25; i++) {
    ex1.present();
  }
  ex1.gpa();
  ex1.attendanceNumber();
  console.log(ex1);
  ex1.summary();

  const ex2 = new Student('Bohdan', 'Neuch', 2006, assessmentsEx2, attendanceEx2);
  ex2.getStudentsAge();
  for (let i = 0; i <= 25; i++) {
    ex2.absent();
  }
  ex2.gpa();
  ex2.attendanceNumber();
  console.log(ex2);
  ex2.summary();

  const ex3 = new Student('Eugene', 'Sredniy', 2007, assessmentsEx3, attendanceEx3);
  ex3.getStudentsAge();
  for (let i = 0; i <= 25; i++) {
    ex3.present();
    ex3.absent();
  }
  ex3.gpa();
  ex3.attendanceNumber();
  console.log(ex3);
  ex3.summary();
}());
