
function fetchTransactions() {
  try {
    const incomeRecords = JSON.parse(localStorage.getItem('incomeList')) || [];
    const expenseRecords = JSON.parse(localStorage.getItem('expenseList')) || [];

    return [
      ...incomeRecords.map((item) => ({ ...item, type: 'Income' })),
      ...expenseRecords.map((item) => ({ ...item, type: 'Expense' })),
    ];
  } catch (error) {
    console.error("Error fetching transactions from localStorage:", error);
    return [];
  }
}

function renderTransactionHistory() {
  const transactions = fetchTransactions();
  const transactionContainer = document.querySelector('.js-transaction-record');
  transactionContainer.innerHTML = '';

  let tr = ''; 

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i]; 
    const tRTitle = transaction.title || '-';
    const tRAmount = transaction.amount || '-';
    const tRAccount = transaction.account || '-';
    const tCategory = transaction.category || '-';
    const tRDate = transaction.date || '-';

    const q = `
      <div class="transaction-records-title">${tRTitle}</div>
      <div class="transaction-records-type">${transaction.type}</div>
      <div class="transaction-records-amount">Rs.${tRAmount}</div>
      <div class="transaction-records-account">${tRAccount}</div>
      <div class="transaction-records-category">${tCategory}</div>
      <div class="transaction-records-date">${tRDate}</div>
    `;

    tr += q;
  }

  document.querySelector('.js-transaction-record').innerHTML = tr;
}

document.addEventListener('DOMContentLoaded', () => {
  renderTransactionHistory();
});

document.getElementById('moneymapButton').addEventListener('click', function () {
  window.location.href = 'internfront.html';
});
