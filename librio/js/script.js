// --- Бургер-меню ---
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('open');
});

// --- Валідація форми ---
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    let isValid = true;

    form.querySelectorAll('input, textarea, select').forEach(field => {
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

    if (!isValid) event.preventDefault();
  });
});

// --- Стилізація книг ---
document.querySelectorAll('.book').forEach(book => {
  book.style.borderRadius = '25px';
  book.style.backgroundColor = '#f0f0f0';
  book.style.padding = '10px';
  book.querySelectorAll('*').forEach(el => el.style.color = '#5E503F');
});

// --- Кнопка "Хочете дізнатись більше про нас" ---
if (window.location.pathname.endsWith('index.html')) {
  const main = document.querySelector('main');
  const button = document.createElement('button');
  button.textContent = 'Хочете дізнатись більше про нас';

  styleButton(button);
  button.addEventListener('click', () => window.location.href = 'about.html');

  main.appendChild(button);
}

// --- Поточна дата в футері ---
const footerCopy = document.querySelector('.footer-copy p');
const today = new Date();
const dayStr = String(today.getDate()).padStart(2, '0');
const monthStr = String(today.getMonth() + 1).padStart(2, '0');
footerCopy.textContent = `© ${dayStr}.${monthStr}.${today.getFullYear()} Librio.`;

// --- Акордеон ---
const btn = document.getElementById('showMoreBtn');
const hiddenGenres = document.querySelectorAll('.hidden-genre');

hiddenGenres.forEach(genre => genre.style.display = 'none');
styleButton(btn, { display: 'inline-block', marginTop: '20px' });

btn.addEventListener('click', () => {
  hiddenGenres.forEach(genre => {
    genre.style.display = genre.style.display === 'none' ? 'list-item' : 'none';
  });
  btn.textContent = btn.textContent === 'Показати більше' ? 'Сховати' : 'Показати більше';
});

// --- Функція для стилізації кнопок ---
function styleButton(button, extraStyles = {}) {
  Object.assign(button.style, {
    padding: '15px 20px',
    backgroundColor: '#A9927D',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '18px',
    textAlign: 'center',
    ...extraStyles
  });
}
