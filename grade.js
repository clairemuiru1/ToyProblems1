function studentGradeGeneator(){
    switch (grade) {
    case grade >79:
       grade = A; // anything above 79
        break;
    case   grade >= 60 && grade <= 79:
       grade = B; // between 60 and 79
       break;
    case grade >= 49 && grade <= 59:
        grade = C; // between 49 and 59
        break;
    case grade >=  40 && grade <= 49:
        grade = D; // between 40 and 49
        break;
    case grade > 40:
        grade = E; // anything below 40
        break;      
    
}}
