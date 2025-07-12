
const expenseList = JSON.parse(localStorage.getItem('expenseList')) || [];

function saveToLocalStorage() {
  localStorage.setItem('expenseList', JSON.stringify(expenseList));
}

function renderexpenselist() {
  let expenserecord = '';

  for (let i = 0; i < expenseList.length; i++) {
    const eRO = expenseList[i];
    const eRTitle = eRO.title || '-';
    const eRAmount = eRO.amount || '-';
    const eRAccount = eRO.account || '-';
    const eCategory = eRO.category || '-';
    const eRDate = eRO.date || '-';

    const z = `<div class="expense-table-record-title">${eRTitle}</div>
               <div class="expense-table-record-amount">Rs.${eRAmount}</div>
               <div class="expense-table-record-account">${eRAccount}</div>
               <div class="expense-table-record-category">${eCategory}</div>
               <div class="expense-table-record-date">${eRDate}</div>
               <div>
                  <button class="expense-table-delete-button" onclick="deleteExpense(${i});">
                    delete
                  </button>
               </div>
              `;

    expenserecord += z;
  }

  document.querySelector('.js-expense-record').innerHTML = expenserecord;
}

function deleteExpense(index) {
  expenseList.splice(index, 1);
  saveToLocalStorage();
  renderexpenselist();
}

function submitExpense() {
  const inputExpenseTitle = document.querySelector('.js-add-expense-title');
  const expenseTitleName = inputExpenseTitle.value;
  const inputExpenseAmount = document.querySelector('.js-add-expense-amount');
  const expenseAmountName = inputExpenseAmount.value;
  const inputExpenseAccount = document.querySelector('.js-add-expense-account');
  const expenseAccountName = inputExpenseAccount.value;
  const inputExpenseCategory = document.querySelector('.js-add-expense-category');
  const expenseCategoryName = inputExpenseCategory.value;
  const inputExpenseDate = document.querySelector('.js-add-expense-date');
  const expenseDateName = inputExpenseDate.value;

  expenseList.push({
    title: expenseTitleName,
    amount: expenseAmountName,
    account: expenseAccountName,
    category: expenseCategoryName,
    date: expenseDateName
  });

  saveToLocalStorage();

  inputExpenseTitle.value = '';
  inputExpenseAmount.value = '';
  inputExpenseAccount.value = '';
  inputExpenseCategory.value = '';
  inputExpenseDate.value = '';

  renderexpenselist();
}

function clearexpense() {
  const inputExpenseTitle = document.querySelector('.js-add-expense-title');
  const inputExpenseAmount = document.querySelector('.js-add-expense-amount');
  const inputExpenseAccount = document.querySelector('.js-add-expense-account');
  const inputExpenseCategory = document.querySelector('.js-add-expense-category');
  const inputExpenseDate = document.querySelector('.js-add-expense-date');

  inputExpenseTitle.value = '';
  inputExpenseAmount.value = '';
  inputExpenseAccount.value = '';
  inputExpenseCategory.value = '';
  inputExpenseDate.value = '';
}

document.getElementById('moneymapButton').addEventListener('click', function () {
  window.location.href = 'internfront.html';
});

document.addEventListener('DOMContentLoaded', () => {
  renderexpenselist();
});
