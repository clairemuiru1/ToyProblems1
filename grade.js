function calculateGrade(){

    const Enter = prompt( "Enter your marks")

    const marks = parseFloat(Enter)

 let grade;
 if (marks > 79) {
   grade = "A";
 } else if (marks >= 60 && marks <= 79) {
   grade = "B";
 } else if (marks >= 50 && marks <= 59) {
   grade = "C";
 } else if (marks >= 40 && marks <= 49) {
   grade = "D";
 } else {
   grade = "E"; 
 }
  // Display the grade to the user
  console.log(`Your grade is: ${grade}`);
 }
 // Call the function to calculate and display the grade
 calculateGrade();
