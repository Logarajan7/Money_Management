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

  // Show the edit division on Edit button click
  editButton.addEventListener('click', () => {
    editDivision.style.display = 'block';
    newName.value = profileName.textContent;
    newMail.value = profileMail.textContent;
    newContact.value = profileContact.textContent;
  });

  // Update profile details and hide the edit division on Set button click
  setButton.addEventListener('click', () => {
    const file = newProfileImg.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        profileImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    }

    profileName.textContent = newName.value || profileName.textContent;
    profileMail.textContent = newMail.value || profileMail.textContent;
    profileContact.textContent = newContact.value || profileContact.textContent;

    editDivision.style.display = 'none';
  });
});
