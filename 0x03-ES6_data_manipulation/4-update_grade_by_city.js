export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      // eslint-disable-next-line no-param-reassign
      student.grade = newGrade ? newGrade.grade : 'N/A';
      return student;
    });
}
