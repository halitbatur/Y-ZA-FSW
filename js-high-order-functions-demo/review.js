// Solve problem here!

function calculateAverageScore(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return (sum / scores.length).toFixed(2);
}

// "Name: John Doe, Average Score: 82, Final Grade: B"

// 1. Loop over all the student objects
// 2. calculate average score and assign a letter
// 3. Create a new array and push the new object of the student to it

// console.log(calculateAverageScore([88, 74, 92]));

const students = [
  { name: "John Doe", scores: [88, 74, 92] },
  { name: "Jane Smith", scores: [58, 72, 65] },
  { name: "Emily Johnson", scores: [91, 85, 89] },
  { name: "Michael Brown", scores: [77, 80, 68] },
];

// 90 and above: A
// 80 to 89: B
// 70 to 79: C
// 60 to 69: D
// Below 60: F

function studentGradeCalculator(students) {
  const studentCalculatedScores = [];
  for (let i = 0; i < students.length; i++) {
    let studentLetter = "";
    const studentAverage = calculateAverageScore(students[i].scores);
    if (studentAverage >= 90) {
      studentLetter = "A";
    } else if (studentAverage >= 80) {
      studentLetter = "B";
    } else if (studentAverage >= 70) {
      studentLetter = "C";
    } else if (studentAverage >= 60) {
      studentLetter = "D";
    } else {
      studentLetter = "F";
    }

    studentCalculatedScores.push({
      name: students[i].name,
      average: studentAverage,
      finalGrade: studentLetter,
    });
    // Name: John Doe, Average Score: 82, Final Grade: B
    console.log(
      `Name: ${students[i].name}, Average Score: ${studentAverage}, Final Grade:${studentLetter}`
    );
  }
  return studentCalculatedScores;
}
