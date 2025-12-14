document.addEventListener('DOMContentLoaded', () => {

  // Перемикач теми
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme');
    });
  }

  // Підсвітка меню
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('nav-hover');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('nav-hover');
  });
});

  // Зміна розміру шрифту
let fontSize = parseInt(getComputedStyle(document.body).fontSize);
fontSize = Math.min(Math.max(fontSize, 12), 30);

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') fontSize += 2;
  if (event.key === 'ArrowDown') fontSize -= 2;

  fontSize = Math.min(Math.max(fontSize, 12), 30);

  document.querySelectorAll('body, p, button, h1, h2, h3, li, label').forEach(el => {
    el.style.fontSize = fontSize + 'px';
  });
});

  // Бургер-меню
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Валідація контактної форми
document.querySelectorAll('form').forEach(form => {
  let formResult = document.createElement('div');
  formResult.style.marginTop = '10px';
  formResult.style.fontWeight = 'bold';
  form.appendChild(formResult);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    formResult.textContent = '';
    let isValid = true;

    const name = form.name ? form.name.value.trim() : '';
    const email = form.email ? form.email.value.trim() : '';
    const message = form.message ? form.message.value.trim() : '';

    const fields = [];

    if (form.name) {
      fields.push({
        el: form.name,
        value: name,
        minLength: 3,
        type: 'text',
        errorMsg: "Ім'я має містити мінімум 3 символи."
      });
    }

    if (form.email) {
      fields.push({
        el: form.email,
        value: email,
        type: 'email',
        errorMsg: 'Email має бути коректним.'
      });
    }

    if (form.message) {
      fields.push({
        el: form.message,
        value: message,
        minLength: 10,
        type: 'text',
        errorMsg: 'Повідомлення має містити мінімум 10 символів.'
      });
    }

    // Очищення попередніх помилок
    fields.forEach(f => {
      f.el.style.borderColor = '';
      const errorSpan = f.el.nextElementSibling;
      if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
      }
    });

    // Валідація
    fields.forEach(f => {
      let valid = true;
      if (f.type === 'text' && f.minLength) {
        if (f.value.length < f.minLength) valid = false;
      }
      if (f.type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(f.value)) valid = false;
      }

      if (!valid) {
        isValid = false;
        f.el.style.borderColor = 'red';
        const errorSpan = f.el.nextElementSibling;
        if (errorSpan) {
          errorSpan.textContent = f.errorMsg;
          errorSpan.style.display = 'block';
          errorSpan.style.color = 'red';
          errorSpan.style.fontSize = '0.9em';
        }
      }
    });

    if (isValid) {
      console.log({ name, email, message });
      formResult.textContent = 'Форма успішно надіслана!';
      formResult.style.color = 'green';
      form.reset();
    }
  });
});

  // Стилізація книг
  document.querySelectorAll('.book').forEach(book => {
    book.style.borderRadius = '25px';
    book.style.backgroundColor = '#f0f0f0';
    book.style.padding = '10px';
    book.querySelectorAll('*').forEach(el => el.style.color = '#5E503F');
  });

  // Кнопка "Дізнатись більше"
  if (window.location.pathname.endsWith('index.html')) {
    const main = document.querySelector('main');
    if (main) {
      const button = document.createElement('button');
      button.textContent = 'Хочете дізнатись більше про нас';
      styleButton(button);
      button.addEventListener('click', () => {
        window.location.href = 'about.html';
      });
      main.appendChild(button);
    }
  }

  // Поточна дата у футері
  const footerCopy = document.querySelector('.footer-copy p');
  if (footerCopy) {
    const today = new Date();
    footerCopy.textContent =
      `© ${String(today.getDate()).padStart(2, '0')}.` +
      `${String(today.getMonth() + 1).padStart(2, '0')}.` +
      `${today.getFullYear()} Librio.`;
  }

  // Акордеон жанрів
  const btn = document.getElementById('showMoreBtn');
  const hiddenGenres = document.querySelectorAll('.hidden-genre');

  if (btn && hiddenGenres.length) {
    hiddenGenres.forEach(g => g.style.display = 'none');
    styleButton(btn, { marginTop: '20px' });

    btn.addEventListener('click', () => {
      hiddenGenres.forEach(g => {
        g.style.display = g.style.display === 'none' ? 'list-item' : 'none';
      });
      btn.textContent =
        btn.textContent === 'Показати більше' ? 'Сховати' : 'Показати більше';
    });
  }

});

// Функція стилізації кнопок
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
