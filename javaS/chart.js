const incomeList = JSON.parse(localStorage.getItem('incomeList')) || [];
const expenseList = JSON.parse(localStorage.getItem('expenseList')) || [];

const incomeCategories = {};
incomeList.forEach(({ category, amount }) => {
  const validAmount = parseFloat(amount) || 0;
  incomeCategories[category] = (incomeCategories[category] || 0) + validAmount;
});

const expenseCategories = {};
expenseList.forEach(({ category, amount }) => {
  const validAmount = parseFloat(amount) || 0;
  expenseCategories[category] = (expenseCategories[category] || 0) + validAmount;
});

const incomeChartData = {
  labels: Object.keys(incomeCategories),
  datasets: [{
    data: Object.values(incomeCategories),
    backgroundColor: [
      '#4CAF50', '#2196F3', '#FF9800', '#E91E63', '#9C27B0', '#FFC107', '#795548'
    ],
  }],
};

const expenseChartData = {
  labels: Object.keys(expenseCategories),
  datasets: [{
    data: Object.values(expenseCategories),
    backgroundColor: [
      '#FF5722', '#673AB7', '#03A9F4', '#8BC34A', '#FFEB3B', '#9E9E9E', '#F44336'
    ],
  }],
};

document.addEventListener('DOMContentLoaded', () => {
  const chartContainer = document.querySelector('.js-chart-right');
  
  chartContainer.innerHTML = `
    <div class="chart-container">
      <h3 style="font-family: arial">Income Distribution</h3>
      <canvas id="incomeChart"></canvas>
    </div>
    <div class="chart-container">
      <h3 style="font-family: arial">Expense Distribution</h3>
      <canvas id="expenseChart"></canvas>
    </div>
  `;

  new Chart(document.getElementById('incomeChart'), {
    type: 'pie',
    data: incomeChartData,
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Income by Category' },
      },
    },
  });

  new Chart(document.getElementById('expenseChart'), {
    type: 'pie',
    data: expenseChartData,
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Expenses by Category' },
      },
    },
  });
});


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

document.getElementById('totalButton').addEventListener('click', function () {
  window.location.href = 'total.html';
});