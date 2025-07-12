
const incomeList = JSON.parse(localStorage.getItem('incomeList')) || [];

function saveToLocalStorage() {
  localStorage.setItem('incomeList', JSON.stringify(incomeList));
}

function renderincomelist() {
  let incomerecord = '';

  for (let i = 0; i < incomeList.length; i++) {
    const iRO = incomeList[i];
    const iRTitle = iRO.title || '-';
    const iRAmount = iRO.amount || '-';
    const iRAccount = iRO.account || '-';
    const iCategory = iRO.category || '-';
    const iRDate = iRO.date || '-';

    const y = `<div class="income-table-record-title">${iRTitle}</div>
               <div class="income-table-record-amount">Rs.${iRAmount}</div>
               <div class="income-table-record-account">${iRAccount}</div>
               <div class="income-table-record-category">${iCategory}</div>
               <div class="income-table-record-date">${iRDate}</div>
               <div>
                  <button class="income-table-delete-button" onclick="deleteIncome(${i});">
                    delete
                  </button>
               </div>
              `;

    incomerecord += y;
  }

  document.querySelector('.js-income-record').innerHTML = incomerecord;
}

function deleteIncome(index) {
  incomeList.splice(index, 1);
  saveToLocalStorage();
  renderincomelist();
}

function submitIncome() {
  const inputincomeTitle = document.querySelector('.js-add-income-title');
  const incomeTitleName = inputincomeTitle.value;
  const inputincomeAmount = document.querySelector('.js-add-income-amount');
  const incomeAmountName = inputincomeAmount.value;
  const inputincomeAccount = document.querySelector('.js-add-income-account');
  const incomeAccountName = inputincomeAccount.value;
  const inputincomeCategory = document.querySelector('.js-add-income-category');
  const incomeCategoryName = inputincomeCategory.value;
  const inputincomeDate = document.querySelector('.js-add-income-date');
  const incomeDateName = inputincomeDate.value;

  incomeList.push({
    title: incomeTitleName,
    amount: incomeAmountName,
    account: incomeAccountName,
    category: incomeCategoryName,
    date: incomeDateName
  });

  saveToLocalStorage();

  inputincomeTitle.value = '';
  inputincomeAmount.value = '';
  inputincomeAccount.value = '';
  inputincomeCategory.value = '';
  inputincomeDate.value = '';

  renderincomelist();
}

function clearincome() {
  const inputincomeTitle = document.querySelector('.js-add-income-title');
  const inputincomeAmount = document.querySelector('.js-add-income-amount');
  const inputincomeAccount = document.querySelector('.js-add-income-account');
  const inputincomeCategory = document.querySelector('.js-add-income-category');
  const inputincomeDate = document.querySelector('.js-add-income-date');

  inputincomeTitle.value = '';
  inputincomeAmount.value = '';
  inputincomeAccount.value = '';
  inputincomeCategory.value = '';
  inputincomeDate.value = '';
}

document.getElementById('moneymapButton').addEventListener('click', function () {
  window.location.href = 'internfront.html';
});

document.addEventListener('DOMContentLoaded', () => {
  renderincomelist();
});
