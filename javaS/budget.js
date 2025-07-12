
const budgetRecords = JSON.parse(localStorage.getItem('budgetRecords')) || {};

function saveToLocalStorage() {
  localStorage.setItem('budgetRecords', JSON.stringify(budgetRecords));
}

function renderbudgetRecords() {
  const bfnd = budgetRecords.fnd || '';
  const bcloths = budgetRecords.cloths || '';
  const bentertainment = budgetRecords.entertainment || '';
  const bhealth = budgetRecords.health || '';
  const bhousehold = budgetRecords.household || '';
  const bmakeinvest = budgetRecords.makeinvest || '';
  const bothers = budgetRecords.others || '';

  document.querySelector('.js-budget-record-fnd').innerHTML = `<div>Rs.${bfnd}</div>`;
  document.querySelector('.js-budget-record-cloths').innerHTML = `<div>Rs.${bcloths}</div>`;
  document.querySelector('.js-budget-record-entertainment').innerHTML = `<div>Rs.${bentertainment}</div>`;
  document.querySelector('.js-budget-record-health').innerHTML = `<div>Rs.${bhealth}</div>`;
  document.querySelector('.js-budget-record-household').innerHTML = `<div>Rs.${bhousehold}</div>`;
  document.querySelector('.js-budget-record-makeinvest').innerHTML = `<div>Rs.${bmakeinvest}</div>`;
  document.querySelector('.js-budget-record-others').innerHTML = `<div>Rs.${bothers}</div>`;
}

function setbudget() {
  const setFnDbudget = document.querySelector('.js-set-fnd-budget');
  const FnDbudgetValue = setFnDbudget.value;
  const setClothsbudget = document.querySelector('.js-set-cloths-budget');
  const ClothsbudgetValue = setClothsbudget.value;
  const setEntertainmentbudget = document.querySelector('.js-set-entertainment-budget');
  const EntertainmentbudgetValue = setEntertainmentbudget.value;
  const setHealthbudget = document.querySelector('.js-set-health-budget');
  const HealthbudgetValue = setHealthbudget.value;
  const setHOuseHoldbudget = document.querySelector('.js-set-household-budget');
  const HouseHoldbudgetValue = setHOuseHoldbudget.value;
  const setMakeInvestbudget = document.querySelector('.js-set-makeinvest-budget');
  const MakeInvestbudgetValue = setMakeInvestbudget.value;
  const setOthersbudget = document.querySelector('.js-set-others-budget');
  const OthersbudgetValue = setOthersbudget.value;

  budgetRecords.fnd = FnDbudgetValue || budgetRecords.fnd || '';
  budgetRecords.cloths = ClothsbudgetValue || budgetRecords.cloths || '';
  budgetRecords.entertainment = EntertainmentbudgetValue || budgetRecords.entertainment || '';
  budgetRecords.health = HealthbudgetValue || budgetRecords.health || '';
  budgetRecords.household = HouseHoldbudgetValue || budgetRecords.household || '';
  budgetRecords.makeinvest = MakeInvestbudgetValue || budgetRecords.makeinvest || '';
  budgetRecords.others = OthersbudgetValue || budgetRecords.others || '';

  saveToLocalStorage();

  setFnDbudget.value = '';
  setClothsbudget.value = '';
  setEntertainmentbudget.value = '';
  setHealthbudget.value = '';
  setHOuseHoldbudget.value = '';
  setMakeInvestbudget.value = '';
  setOthersbudget.value = '';

  renderbudgetRecords();
}

function clearbudget() {
  const setFnDbudget = document.querySelector('.js-set-fnd-budget');
  const setClothsbudget = document.querySelector('.js-set-cloths-budget');
  const setEntertainmentbudget = document.querySelector('.js-set-entertainment-budget');
  const setHealthbudget = document.querySelector('.js-set-health-budget');
  const setHOuseHoldbudget = document.querySelector('.js-set-household-budget');
  const setMakeInvestbudget = document.querySelector('.js-set-makeinvest-budget');
  const setOthersbudget = document.querySelector('.js-set-others-budget');

  setFnDbudget.value = '';
  setClothsbudget.value = '';
  setEntertainmentbudget.value = '';
  setHealthbudget.value = '';
  setHOuseHoldbudget.value = '';
  setMakeInvestbudget.value = '';
  setOthersbudget.value = '';
}

document.getElementById('moneymapButton').addEventListener('click', function () {
  window.location.href = 'internfront.html';
});

document.addEventListener('DOMContentLoaded', () => {
  renderbudgetRecords();
});
