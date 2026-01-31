/**
 * entry point for rendering JS components with internationalization.
 */

import i18next from './i18n';

import 'normalize.css';
import 'material-icons/iconfont/material-icons.css';
import 'flag-icons/css/flag-icons.min.css';
import '@/sass/styles.scss';

import { createHeader } from '@/templates/header.js';
import { createMain } from '@/templates/main.js';
import { createFooter } from '@/templates/footer.js';

const mount = document.getElementById('app');

if (!mount) {
  document.body.innerHTML = '<p style="padding:20px;color:red;">#app not found</p>';
} else {
  try {
    mount.innerHTML = '';
    mount.appendChild(createHeader());
    mount.appendChild(createMain());
    mount.appendChild(createFooter());
  } catch (err) {
    mount.innerHTML = `<p style="padding:20px;color:red;">Error: ${err.message}</p>`;
    console.error(err);
  }
}

const updateTranslations = () => {
  document.querySelectorAll('[data-lang]').forEach((node) => {
    const key = node.dataset.lang;
    if (key) node.textContent = i18next.t(key);
  });
};

i18next.on('initialized languageChanged', updateTranslations);
updateTranslations();

const modal = document.getElementById('questionModal');

const openModal = () => {
  if (!modal) return;
  modal.classList.remove('is-hidden');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.add('is-hidden');
  modal.setAttribute('aria-hidden', 'true');
};

document.addEventListener('click', (e) => {
  const btnLang = e.target.closest('[data-lang-switch]');
  if (btnLang) {
    const lng = btnLang.dataset.langSwitch;
    i18next.changeLanguage(lng);
    localStorage.setItem('language', lng);
    return;
  }

  const openBtn = e.target.closest('[data-open-modal="question"]');
  if (openBtn) {
    openModal();
    return;
  }

  const closeBtn = e.target.closest('[data-close-modal]');
  if (closeBtn) {
    closeModal();
    return;
  }

  const menuToggle = e.target.closest('[data-menu-toggle]');
  if (menuToggle) {
    const mobileNav = document.querySelector('.header__nav--mobile');
    if (mobileNav) {
      mobileNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', mobileNav.classList.contains('is-open'));
    }
    return;
  }

  const navLink = e.target.closest('.header__nav--mobile a');
  if (navLink) {
    document.querySelector('.header__nav--mobile')?.classList.remove('is-open');
    document.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const form = document.getElementById('questionForm');
const hint = document.getElementById('formHint');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (hint) hint.textContent = 'Sent (stub).';
  });
}
