const incomeList = JSON.parse(localStorage.getItem('incomeList')) || [];
const expenseList = JSON.parse(localStorage.getItem('expenseList')) || [];
const budgetRecords = JSON.parse(localStorage.getItem('budgetRecords')) || {};

function generateReport() {
  const frontRightDiv = document.querySelector('.js-front-right');
  frontRightDiv.innerHTML = '';

  let incomeHTML = '<div class="total-income-head">Income</div>';
  const incomeCategories = {};

  incomeList.forEach((income) => {
    const category = income.category || 'Uncategorized';
    const amount = parseFloat(income.amount) || 0;
    incomeCategories[category] = (incomeCategories[category] || 0) + amount;
  });

  Object.keys(incomeCategories).forEach((category) => {
    incomeHTML += `<div class="income-c-report">${category}: Rs.${incomeCategories[category]}</div>`;
  });

  const totalIncome = Object.values(incomeCategories).reduce((sum, val) => sum + val, 0);
  incomeHTML += `<div class="income-c-total">Total Income: Rs.${totalIncome}</div>`;

  let expenseHTML = '<div class="total-expense-head">Expenses</div>';
  const expenseCategories = {};

  expenseList.forEach((expense) => {
    const category = expense.category || 'Uncategorized';
    const amount = parseFloat(expense.amount) || 0;
    expenseCategories[category] = (expenseCategories[category] || 0) + amount;
  });

  Object.keys(expenseCategories).forEach((category) => {
    expenseHTML += `<div class="expense-c-report">${category}: Rs.${expenseCategories[category]}</div>`;
  });

  const totalExpense = Object.values(expenseCategories).reduce((sum, val) => sum + val, 0);
  expenseHTML += `<div class="expense-c-total">Total Expenses: Rs.${totalExpense}</div>`;

  let budgetHTML = '<div class="total-budget-head">Budget</div>';
  Object.keys(budgetRecords).forEach((category) => {
    budgetHTML += `<div class="budget-c-report">${category}: Rs.${budgetRecords[category]}</div>`;
  });

  frontRightDiv.innerHTML = `
    ${incomeHTML}
    <hr>
    ${expenseHTML}
    <hr>
    ${budgetHTML}
    <button class="download-button" onclick="generatePDF()">Download PDF</button>
  `;
}

async function generatePDF() {
  const jsPDF = window.jspdf.jsPDF;
  const content = document.querySelector('.js-front-right');

  const canvas = await html2canvas(content);
  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  pdf.save('report.pdf'); 
}

document.addEventListener('DOMContentLoaded', generateReport);


document.getElementById('profileButton').addEventListener('click', function () {
  window.location.href = 'profile.html';
});

document.getElementById('dashboardButton').addEventListener('click', function () {
  window.location.href = 'internfront.html';
});

document.getElementById('calendarButton').addEventListener('click', function () {
  window.location.href = 'calendar.html';
});

document.getElementById('chartButton').addEventListener('click', function () {
  window.location.href = 'chart.html';
});

document.getElementById('totalButton').addEventListener('click', function () {
  window.location.href = 'total.html';
});