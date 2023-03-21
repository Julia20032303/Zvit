function validateForm() {
    // Перевірка обов'язкових полів
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (name == "" || surname == "" || date == "" || email == "" || password == "" || confirmPassword == "") {
      alert("Будь ласка, заповніть всі обов'язкові поля.");
      return false;
    }

    // Перевірка числових значень
    if (isNaN(document.getElementById("age").value)) {
      alert("Будь ласка, введіть числове значення віку.");
      return false;
    }

    // Перевірка дати
    let dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!dateRegex.test(date)) {
      alert("Будь ласка, введіть дату у форматі DD.MM.YYYY.");
      return false;
    }

    // Перевірка паролів
    if (password !== confirmPassword) {
      alert("Паролі не співпадають.");
      return false;
    }

    return true;
  }