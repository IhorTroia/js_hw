function Student(name, surname, birthYear, lessonsCount = 25) {
  const gradeSettings = {
    min: 0,
    max: 100,
  };

  let currentLesson = 0;

  function checkAttendance(lessonVisited = true) {
    if (typeof lessonVisited !== 'boolean') throw new Error('Error');
    if (currentLesson >= lessonsCount) return console.log('cannot');
    this.attendance[currentLesson] = lessonVisited;
    currentLesson += 1;
  }

  function setGrade(grade) {
    if (typeof grade !== 'number') throw new Error('Not num');
    if (grade > gradeSettings.max || grade < gradeSettings.min) throw new Error('Invalid num');

    const currentLessonIndex = currentLesson - 1;
    if (!this.attendance[currentLessonIndex]) throw new Error('Absent');

    this.grades[currentLessonIndex] = grade;
  }

  return {
    name,
    surname,
    birthYear,
    grades: new Array(lessonsCount),
    attendance: new Array(lessonsCount),

    getAge() {
      console.log(2024 - this.birthYear);
    },
    present() {
      checkAttendance.call(this);
    },
    absent() {
      checkAttendance.call(this, false);
    },
    setGrade(grade) {
      setGrade.call(this, grade);
    },
  };

  // Student.prototype.getAvgGrade = function () {};
  // Student.prototype.getAvgAttendance = function () {};
  //
  // Student.prototype.getSummary = function () {};
}

const student1 = new Student('Max', 'Aaa', 2002);
// student1.getAge();
student1.present();
student1.setGrade(100)
console.log(student1);
