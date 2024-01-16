'use strict';

(function () {
  function getStudentConstructor() {
    const gradeSettings = {
      min: 0,
      max: 100,
    };
    function getAge() {
      if (typeof this.yearOfBirth !== 'number') throw new Error('Year of birth should be a number type');
      console.log(`${this.name} age is ${new Date().getFullYear() - this.yearOfBirth}`);
    }

    function checkAttendance(currentLesson, lessonsCount, lessonVisited = true) {
      if (typeof lessonVisited !== 'boolean') throw new Error('lessonVisited should be a boolean type');
      if (currentLesson >= lessonsCount) throw new Error('Only 25 lessons can be');
      this.attendance[currentLesson] = lessonVisited;
    }

    function setGrade(grade, currentLesson) {
      if (typeof grade !== 'number') throw new Error('Grade should be a number type');
      if (grade > gradeSettings.max || grade < gradeSettings.min) throw new Error('Incorrect grade');
      const currentLessonIndex = currentLesson - 1;
      if (!this.attendance[currentLessonIndex]) throw new Error('Student was absent from class');
      this.grades[currentLessonIndex] = grade;
    }

    function getAvgGrade() {
      this.averageGrade = this.grades.reduce((total, assessment) => total + assessment, 0) / this.grades.length;
      console.log(this.averageGrade);
    }

    function attendanceNumber() {
      this.attendanceQuantity = this.attendance.filter((item) => item === true).length;
      console.log(this.attendanceQuantity);
    }

    function summary() {
      if (this.averageGrade > 90 && this.attendanceQuantity > 22) {
        console.log('Well Done!');
      } else if (this.averageGrade < 90 && this.attendanceQuantity < 22) {
        console.log('Radish...');
      } else if (this.averageGrade < 90 || this.attendanceQuantity < 22) {
        console.log('Good, but you can be better!');
      }
    }

    return function StudentConstructor(name, surname, yearOfBirth, lessonsCount = 25) {
      let currentLesson = 0;

      return {
        name,
        surname,
        yearOfBirth,
        grades: new Array(lessonsCount),
        attendance: new Array(lessonsCount),

        get currentLesson() {
          return currentLesson;
        },

        getStudentsAge() {
          getAge.call(this);
        },

        present() {
          checkAttendance.call(this, currentLesson, lessonsCount, true);
          currentLesson += 1;
        },

        absent() {
          checkAttendance.call(this, currentLesson, lessonsCount, false);
          currentLesson += 1;
        },

        setGrade(grade) {
          setGrade.call(this, grade, currentLesson);
        },

        getAvgGrade() {
          getAvgGrade.call(this);
        },

        getAttendanceQuantity() {
          attendanceNumber.call(this);
        },

        summary() {
          summary.call(this);
        },
      };
    };
  }

  const Student = getStudentConstructor();

  const ex1 = new Student('Anton', 'Botan', 2005);
  console.log(ex1);
  for (let i = 0; i < 25; i++) {
    ex1.present();
    ex1.setGrade(100);
  }
  ex1.getAvgGrade();
  ex1.getAttendanceQuantity();
  ex1.summary();
}());
