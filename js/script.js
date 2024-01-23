(function () {
  class Student {
    static gradeSettings = {
      min: 0,
      max: 100,
    };

    currentLesson = 0;

    constructor(name, surname, yearOfBirth, lessonsCount = 25) {
      this.name = name;
      this.surname = surname;
      this.yearOfBirth = yearOfBirth;
      this.grades = new Array(lessonsCount);
      this.attendance = new Array(lessonsCount);
    }

    getStudentsAge() {
      if (typeof this.yearOfBirth !== 'number') throw new Error('Year of birth should be a number type');
      console.log(`${this.name} age is ${new Date().getFullYear() - this.yearOfBirth}`);
    }

    checkAttendance(lessonVisited = true) {
      if (typeof lessonVisited !== 'boolean') throw new Error('lessonVisited should be a boolean type');
      if (this.currentLesson >= this.attendance.length) throw new Error('Only 25 lessons can be');
      this.attendance[this.currentLesson] = lessonVisited;
      this.currentLesson += 1;
    }

    present() {
      this.checkAttendance(true);
    }

    absent() {
      this.checkAttendance(false);
    }

    setGrade(grade) {
      if (typeof grade !== 'number') throw new Error('Grade should be a number type');
      if (grade > Student.gradeSettings.max || grade < Student.gradeSettings.min) throw new Error('Incorrect grade');
      const currentLessonIndex = this.currentLesson - 1;
      if (!this.attendance[currentLessonIndex]) throw new Error('Student was absent from class');
      this.grades[currentLessonIndex] = grade;
    }

    getAvgGrade() {
      this.averageGrade = this.grades.reduce((total, assessment) => total + assessment, 0) / this.grades.length;
      console.log(this.averageGrade);
    }

    attendanceNumber() {
      this.attendanceQuantity = this.attendance.filter((item) => item === true).length;
      console.log(this.attendanceQuantity);
    }

    summary() {
      if (this.averageGrade > 90 && this.attendanceQuantity > 22) {
        console.log('Well Done!');
      } else if (this.averageGrade < 90 && this.attendanceQuantity < 22) {
        console.log('Radish...');
      } else if (this.averageGrade < 90 || this.attendanceQuantity < 22) {
        console.log('Good, but you can be better!');
      }
    }
  }

  const ex1 = new Student('Ihor', 'Troia', 2002);
  console.log(ex1);
  for (let i = 0; i < 25; i++) {
    ex1.absent();
  }
  ex1.getAvgGrade();
  ex1.attendanceNumber();
  ex1.summary();

  const ex2 = new Student('Max', 'Pipa', 2000);
  console.log(ex2);
  for (let i = 0; i < 25; i++) {
    ex2.present();
    ex2.setGrade(100);
  }
  ex2.getAvgGrade();
  ex2.attendanceNumber();
  ex2.summary();

  const ex3 = new Student('Mid', 'Mid', 2001);
  console.log(ex3);
  for (let i = 0; i < 25; i++) {
    ex3.present();
    ex3.setGrade(50);
  }
  ex3.getAvgGrade();
  ex3.attendanceNumber();
  ex3.summary();
}());
