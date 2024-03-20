// Op 1
function addMonths_op1 (current_month, current_year, months_to_add) {
    let month = (current_month + months_to_add) % 12;
    let year = current_year + Math.floor((current_month + months_to_add) / 12);

    // Fix for December's special case
    if (month === 0) {
        month = 12;
        year--;
    }

    return { month, year };
}

// Op 2
function addMonths_op2 (current_month, current_year, months_to_add) {
    const nextMonth = (current_month + months_to_add - 1) % 12 + 1;
    const nextYear = current_year + Math.floor((current_month + months_to_add - 1) / 12);

    month = Math.min(Math.max(nextMonth, 1), 12);
    year = nextYear;

    return { month, year };
}

let month = 2, year = 2024, number_of_months = 6;
addMonths_op1(month, year, number_of_months) // { month: 8, year: 2024 }
addMonths_op2(month, year, number_of_months) // { month: 8, year: 2024 }

