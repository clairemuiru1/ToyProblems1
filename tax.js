function calculateNetSalary() {
    // Prompt the user to input basic salary and benefits
    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));
  
    // Calculation of the gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculation of the payee  
    let payee;
    if (grossSalary <= 24000) {
      payee = 0.1 * grossSalary;
    } else if (grossSalary <= 45333) {
      payee = 3500 + 0.25 * (grossSalary - 34000);
    } else {
      payee = 6400 + 0.3 * (grossSalary - 43333);
    }
  
    // Calculate NHIF deductions
    let nhifDeductions;
    if (grossSalary <= 5999) {
      nhifDeductions = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      nhifDeductions = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      nhifDeductions = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      nhifDeductions = 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      nhifDeductions = 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      nhifDeductions = 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      nhifDeductions = 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      nhifDeductions = 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      nhifDeductions = 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      nhifDeductions = 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      nhifDeductions = 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      nhifDeductions = 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      nhifDeductions = 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
      nhifDeductions = 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      nhifDeductions = 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      nhifDeductions = 1600;
    } else if (grossSalary >= 100000) {
      nhifDeductions = 1700;
    }
  
    // Calculation of NSSF deductions 
    const nssfDeductions = 0.06 * grossSalary;
  
    // Calculation of net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    // Display the calculated values 
    alert(`Gross Salary: $${grossSalary.toFixed(2)}`);
    alert(`Payee (Tax): $${payee.toFixed(2)}`);
    alert(`NHIF Deductions: $${nhifDeductions.toFixed(2)}`);
    alert(`NSSF Deductions: $${nssfDeductions.toFixed(2)}`);
    alert(`Net Salary: $${netSalary.toFixed(2)}`);
  }
  
  // Call the function for calculation and display the salary details
  calculateNetSalary();