document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var errorList = document.getElementById('error-list');

    form.addEventListener('submit', function (event) {
      errorList.innerHTML = '';

      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var helpTopicSelect = document.getElementById('helpTopic');
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameInput.value) {
        nameInput.classList.add('error-border');
        errorList.innerHTML += '<li>A név mező nincs kitöltve!</li>';
      } else {
        nameInput.classList.remove('error-border');
      }

      if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error-border');
        errorList.innerHTML += '<li>Üres vagy nem megfelelő email mező!</li>';
      } else {
        emailInput.classList.remove('error-border');
      }

      if (helpTopicSelect.value === "") {
        helpTopicSelect.classList.add('error-border');
        errorList.innerHTML += '<li>Nincs kiválasztva a segítségkérés témája!</li>';
      } else {
        helpTopicSelect.classList.remove('error-border');
      }

      if (!nameInput.value || !emailInput.value || !emailRegex.test(emailInput.value) || helpTopicSelect.value === "") {
        event.preventDefault();
      }else{
        alert('Sikeresen felvette velünk a kapcsolatot!');
      }
    });
});