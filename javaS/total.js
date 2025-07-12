const incomeList = JSON.parse(localStorage.getItem('incomeList')) || [];
const expenseList = JSON.parse(localStorage.getItem('expenseList')) || [];
const budgetRecords = JSON.parse(localStorage.getItem('budgetRecords')) || {};

function calculateTotals() {

  const totalIncome = incomeList.reduce((sum, income) => sum + parseFloat(income.amount || 0), 0);

  const totalExpense = expenseList.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

  const totalBudget = Object.values(budgetRecords).reduce((sum, budget) => sum + parseFloat(budget || 0), 0);

  return { totalIncome, totalExpense, totalBudget };
}

function renderTotals() {
  const { totalIncome, totalExpense, totalBudget } = calculateTotals();

  const totalsHtml = `
    <div class="total-income">Total Income: Rs.${totalIncome.toFixed(2)}</div>
    <div class="total-expense">Total Expense: Rs.${totalExpense.toFixed(2)}</div>
    <div class="total-budget">Total Budget: Rs.${totalBudget.toFixed(2)}</div>
  `;

  document.querySelector('.js-front-right').innerHTML = totalsHtml;
}

renderTotals();


document.getElementById('profileButton').addEventListener('click', function () {
  window.location.href = 'profile.html';
});

document.getElementById('dashboardButton').addEventListener('click', function () {
  window.location.href = 'internfront.html';
});

document.getElementById('calendarButton').addEventListener('click', function () {
  window.location.href = 'calendar.html';
});

document.getElementById('generateReportButton').addEventListener('click', function () {
  window.location.href = 'generatereport.html';
});

document.getElementById('chartButton').addEventListener('click', function () {
  window.location.href = 'chart.html';
});