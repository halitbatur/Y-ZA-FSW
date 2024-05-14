## Problem Description: Student Grade Calculator

### Scenario:

You are developing a student grade calculator for a class. The program should calculate the average score for each student and determine their final grade based on the average.

### Data:

You will be given an array of student objects. Each object contains the name of the student and an array of scores they've received throughout the semester.

### Requirements:

Write a function to calculate the average score for each student.
Use a loop to iterate over the array of students.
Use conditions to assign a final grade based on the average score according to the following scale:

1. 90 and above: A
2. 80 to 89: B
3. 70 to 79: C
4. 60 to 69: D
5. Below 60: F

Print each student's name, their average score, and their final grade.
Output:
For each student, the output should be in the format:
"Name: John Doe, Average Score: 82, Final Grade: B"

### Sample Data:

```javascript
const students = [
  { name: "John Doe", scores: [88, 74, 92] },
  { name: "Jane Smith", scores: [58, 72, 65] },
  { name: "Emily Johnson", scores: [91, 85, 89] },
  { name: "Michael Brown", scores: [77, 80, 68] },
];
```

### Expected output:

```
[
  { name: "John Doe", average: 84.67, finalGrade: "B" },
  { name: "Jane Smith", average: 65, finalGrade: "D" },
  { name: "Emily Johnson", average: 88.33, finalGrade: "B" },
  { name: "Michael Brown", average: 75, finalGrade: "C" },
];
```
