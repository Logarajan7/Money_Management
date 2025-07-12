const incomeList = JSON.parse(localStorage.getItem('incomeList')) || [];
const expenseList = JSON.parse(localStorage.getItem('expenseList')) || [];

function groupByMonth(data) {
  const totals = {};

  data.forEach(item => {
    const date = new Date(item.date);
    if (isNaN(date)) return;

    const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const amount = parseFloat(item.amount) || 0;

    if (!totals[month]) {
      totals[month] = 0;
    }
    totals[month] += amount;
  });

  return totals;
}

function renderCalendarView() {

  const incomeTotals = groupByMonth(incomeList);
  const expenseTotals = groupByMonth(expenseList);

  let html = `<div class="calendar-records">`;
  html += `<h2>Month-wise Totals</h2>`;
  html += `<div class="calendar-totals-header">
             <div>Month</div>
             <div>Total Income</div>
             <div>Total Expense</div>
           </div>`;

  const allMonths = Array.from(new Set([...Object.keys(incomeTotals), ...Object.keys(expenseTotals)]));
  allMonths.sort();

  allMonths.forEach(month => {
    const income = incomeTotals[month] || 0;
    const expense = expenseTotals[month] || 0;

    html += `<div class="calendar-totals-row">
               <div>${month}</div>
               <div>Rs.${income.toFixed(2)}</div>
               <div>Rs.${expense.toFixed(2)}</div>
             </div>`;
  });

  html += `</div>`;

  document.querySelector('.js-front-right').innerHTML = html;
}

renderCalendarView();


document.getElementById('profileButton').addEventListener('click', function () {
  window.location.href = 'profile.html';
});

document.getElementById('dashboardButton').addEventListener('click', function () {
  window.location.href = 'internfront.html';
});

document.getElementById('chartButton').addEventListener('click', function () {
  window.location.href = 'chart.html';
});

document.getElementById('generateReportButton').addEventListener('click', function () {
  window.location.href = 'generatereport.html';
});

document.getElementById('totalButton').addEventListener('click', function () {
  window.location.href = 'total.html';
});