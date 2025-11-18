
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    let isValid = true;

    form.querySelectorAll('input, textarea, select').forEach((field) => {
      const error = form.querySelector(`.error-message[data-for="${field.name}"]`);
      if (!error) return;

      error.textContent = '';
      error.classList.remove('active');

      if (!field.checkValidity()) {
        isValid = false;
        error.textContent = field.validationMessage;
        error.classList.add('active');
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });
});
