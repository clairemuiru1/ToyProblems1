let basicSalary = Number
let benefits = Number
let contributionBenefit = Number
const personalRelief = 2400
let insuraceRelief = Number
const taxablePay = (grossSalary - (contributionBenefit + personalRelief + insuraceRelief))

const grossSalary = basicSalary + benefits;
const netSalary = grossSalary - (payee + NHIF + NSSF_I + NSSF_II);

function limiter(insuraceRelief) {
    if (insuraceRelief.value < 0) insuraceRelief.value = 0;
    if (insuraceRelief.value > 5000) insuraceRelief.value = 5000;
}
function payee () {
    switch (taxablePay) {
        case taxablePay <= 24000:
            return taxablePay*0.1 // 10% tax rate
            break;
        case taxablePay > 24001 && taxablePay<32333:
            return taxablePay*0.25 // 25% tax rate
            break;
       case taxablePay >32334 && taxablePay <500000:
           return taxablePay* 0.3 // 30% tax rate
           break;
       case   taxablePay >500001 &&taxablePay < 800000:
            return taxablePay*0.325 // 32.5% tax rate 
        default:
            return taxablePay*0.35 // 35% tax rate for income above 800000
            break;
    }
}
function NHIF() {
    switch (grossSalary) {
        case grossSalary < 5999:
            return 150 // 150 is deducted
             break;
        case grossSalary >6000 && grossSalary<7999:
            return 300 // 300 is deducted
            break;
        case grossSalary >8000 && grossSalary <11999:
            return 400 // 400 is deducted
            break;
        case grossSalary >12000 && grossSalary < 14999:
            return 500 // 500 is deducted
            break;
        case grossSalary >15000 && grossSalary <19999:
            return 600 // 600 is deducted
            break;
        case grossSalary >20000 && grossSalary<24999:
            return 750 // 750 is deducted
            break;
        case grossSalary >25000 && grossSalary< 29999:
            return 850 // 850 is deducted
            break;
        case grossSalay > 30000 && grossSalary <34999:
            return 900 // 900 is deducted
            break;
        case grossSalary> 35000&& grossSalary<39999: 
            return 950 // 950 is deducted
            break;
        case grossSalary>40000&& grossSalary<45999:
            return 1000 // 1000 is deducted
            break;
        case grossSalary> 45000&& grossSalary<49999:
            return 1100 // 1100 is deducted
            break;
        case grossSalary> 50000&& grossSalary< 59999:
            return 1200 //1200 is deducted
            break;
        case grossSalary>60000 && grossSalary< 69999:
            return 1300 // 1300 is deducted
            break;
        case grossSalary> 70000 && grossSalary<79999:
            return 1400 // 1400 is deducted
            break;
        case grossSalary> 80000&& grossSalary<89999:
            return 1500 // 1500 is deducted
            break;
        case grossSalary> 90000&& grossSalary<99999:
            return 1600 // 1600 is deducted
            break;
        default:
            return 1700 // 1700 is deducted for grossSalary above 100000
            break;
    }
}
function NSSF_I() {
    function limiter(NSSF_I) {
        if (NSSF_I.value < 0) NSSF_I.value = 0;
        if (NSSF_I.value > 5000) NSSF_I.value = 6000;
        return (grossSalary * 0.06) // 6% of pensionable pay to NSSF
    }
}
function NSSF_II() {
    function limiter(NSSF_II) {
        if (NSSF_II.value < 0) NSSF_II.value = 6001;
        if (NSSF_II.value > 5000) NSSF_II.value = 18000;
        return (grossSalary * 0.06) // 6% of pensionable pay to NSSF
    }
}