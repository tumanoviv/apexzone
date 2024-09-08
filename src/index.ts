// src/index.ts
import './index.css';

const button = document.querySelector('.button');
button.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
});
