import React from "react";

function App() {
  const students = [
    { id: 1, name: "Ali", marks: 95 },
    { id: 2, name: "Ahmed", marks: 85 },
    { id: 3, name: "Sara", marks: 75 },
    { id: 4, name: "Ayesha", marks: 65 },
    { id: 5, name: "Usman", marks: 55 },
    { id: 6, name: "Hamza", marks: 45 },
    { id: 7, name: "Abdulrehman", marks: 90 },
    { id: 8, name: "Mujtaba", marks: 35 },
    { id: 9, name: "Abuhurairah", marks: 87 },
    { id: 6, name: "Sadia", marks: 75 },
  ];

  // Function to calculate grade
  const getGrade = (marks) => {
    if (marks >= 90 && marks <= 100) return "A";
    else if (marks >= 80) return "B";
    else if (marks >= 70) return "C";
    else if (marks >= 60) return "D";
    else if (marks >= 50) return "E";
    else return "F";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Result System</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>Name: {student.name}</h3>
          <p>Marks: {student.marks}</p>
          <p>Grade: {getGrade(student.marks)}</p>

          {student.marks >= 50 ? (
            <p style={{ color: "green" }}>Result: Pass</p>
          ) : (
            <p style={{ color: "red" }}>Result: Fail</p>
          )}

          {/* 1. HR after each result */}
          <hr />
        </div>
      ))}

      {/* 2. Failed Students Component */}
      <h2>Failed Students</h2>

      {students.filter((student) => student.marks < 50).length > 0 ? (
        students
          .filter((student) => student.marks < 50)
          .map((student) => (
            <div key={student.id}>
              <p>
                {student.name} - {student.marks} Marks (Grade:{" "}
                {getGrade(student.marks)})
              </p>
            </div>
          ))
      ) : (
        <p>No failed students.</p>
      )}
    </div>
  );
}

export default App;