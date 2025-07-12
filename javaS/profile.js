
document.addEventListener('DOMContentLoaded', () => {
  const editButton = document.querySelector('.profile-edit-button');
  const setButton = document.querySelector('.profile-set-button');
  const editDivision = document.querySelector('.js-profile-changes');

  const profileImg = document.querySelector('.js-profile-img');
  const profileName = document.querySelector('.js-profile-detail-name');
  const profileMail = document.querySelector('.js-profile-detail-mail');
  const profileContact = document.querySelector('.js-profile-detail-contact');

  const newProfileImg = document.querySelector('.js-new-profile-img');
  const newName = document.querySelector('.js-new-name');
  const newMail = document.querySelector('.js-new-mail');
  const newContact = document.querySelector('.js-new-contact');

  function loadProfile() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
      img: 'photoss/blank-profile-picture.webp',
      name: 'User Name',
      mail: 'Mail ID',
      contact: 'Contact No',
    };

    profileImg.src = profileData.img;
    profileName.textContent = profileData.name;
    profileMail.textContent = profileData.mail;
    profileContact.textContent = profileData.contact;
  }

  function saveProfile(img, name, mail, contact) {
    const profileData = { img, name, mail, contact };
    localStorage.setItem('profileData', JSON.stringify(profileData));
  }

  editButton.addEventListener('click', () => {
    editDivision.style.display = 'grid';
    newName.value = profileName.textContent;
    newMail.value = profileMail.textContent;
    newContact.value = profileContact.textContent;
  });

  setButton.addEventListener('click', () => {
    let img = profileImg.src;

    const file = newProfileImg.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        img = reader.result;
        profileImg.src = img;
        saveProfile(img, newName.value || profileName.textContent, newMail.value || profileMail.textContent, newContact.value || profileContact.textContent);
      };
      reader.readAsDataURL(file);
    } else {
      saveProfile(img, newName.value || profileName.textContent, newMail.value || profileMail.textContent, newContact.value || profileContact.textContent);
    }

    profileName.textContent = newName.value || profileName.textContent;
    profileMail.textContent = newMail.value || profileMail.textContent;
    profileContact.textContent = newContact.value || profileContact.textContent;

    editDivision.style.display = 'none';
  });

  loadProfile();
});

document.getElementById('chartButton').addEventListener('click', function () {
  window.location.href = 'chart.html';
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