import i18next from './i18n';

import 'normalize.css';
import '@/sass/styles.scss';

import { createHeader } from '@/templates/header.js';
import { createModal } from '@/templates/main.js';
import { createFooter } from '@/templates/footer.js';
import { createLayout } from '@/templates/layout.js';
import { initRouter } from '@/router.js';
import { initScrollReveal } from '@/utils/scrollReveal.js';

const mount = document.getElementById('app');
const bootLoader = document.getElementById('boot-loader');

const finishBootLoading = () => {
  document.body.classList.remove('is-boot-loading');
  if (!bootLoader) return;
  bootLoader.classList.add('is-leaving');
  window.setTimeout(() => bootLoader.remove(), 320);
};

if (!mount) {
  document.body.innerHTML = '<p style="padding:20px;color:red;">#app not found</p>';
  finishBootLoading();
} else {
  try {
    mount.innerHTML = '';
    mount.appendChild(createHeader());
    const mainContainer = createLayout();
    mount.appendChild(mainContainer);
    mount.appendChild(createFooter());
    mount.appendChild(createModal());
    document.addEventListener('app:render', finishBootLoading, { once: true });
    initRouter(mainContainer);
  } catch (err) {
    mount.innerHTML = `<p style="padding:20px;color:red;">Error: ${err.message}</p>`;
    console.error(err);
    finishBootLoading();
  }
}

const updateTranslations = () => {
  if (i18next.language) {
    document.documentElement.lang = i18next.language;
  }
  document.querySelectorAll('[data-lang]').forEach((node) => {
    const key = node.dataset.lang;
    if (!key) return;
    const value = i18next.t(key);
    if (node.hasAttribute('data-lang-html')) {
      node.innerHTML = value;
      return;
    }
    node.textContent = value;
  });
};

i18next.on('initialized', updateTranslations);
i18next.on('languageChanged', updateTranslations);
i18next.on('loaded', updateTranslations);
document.addEventListener('app:render', updateTranslations);
document.addEventListener('app:render', initScrollReveal);
updateTranslations();

const modal = () => document.getElementById('questionModal');
const practiceModal = () => document.getElementById('practiceModal');
const practiceTitle = () => document.getElementById('practiceModalTitle');
const practiceBody = () => document.getElementById('practiceModalBody');
const reviewImageModal = () => document.getElementById('reviewImageModal');
const reviewImageModalImg = () => document.getElementById('reviewImageModalImg');
const mobileNav = () => document.querySelector('.header__nav--mobile');
const burger = () => document.querySelector('[data-menu-toggle]');

const closeMobileDropdowns = () => {
  document.querySelectorAll('.mobile-dropdown.is-open').forEach((item) => {
    item.classList.remove('is-open');
  });
  document.querySelectorAll('[data-mobile-dropdown-toggle]').forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false');
  });
};

const closeMobileNav = () => {
  mobileNav()?.classList.remove('is-open');
  burger()?.setAttribute('aria-expanded', 'false');
  closeMobileDropdowns();
};

const toggleMobileDropdown = (trigger) => {
  const dropdown = trigger.closest('.mobile-dropdown');
  if (!dropdown) return;

  const willOpen = !dropdown.classList.contains('is-open');
  closeMobileDropdowns();
  if (!willOpen) return;

  dropdown.classList.add('is-open');
  trigger.setAttribute('aria-expanded', 'true');
};

const toggleMobileNav = () => {
  const nav = mobileNav();
  if (!nav) return;
  const isOpen = nav.classList.toggle('is-open');
  burger()?.setAttribute('aria-expanded', isOpen);
  if (!isOpen) closeMobileDropdowns();
};

const openModal = () => {
  const node = modal();
  if (!node) return;
  node.classList.remove('is-hidden');
  node.setAttribute('aria-hidden', 'false');
  node.querySelector('input, textarea, button')?.focus();
};

const closeModal = () => {
  const node = modal();
  if (!node) return;
  node.classList.add('is-hidden');
  node.setAttribute('aria-hidden', 'true');
};

const openPracticeModal = (trigger) => {
  const node = practiceModal();
  if (!node) return;
  const card = trigger?.closest('.card');
  const titleText = card?.querySelector('.card__title')?.textContent?.trim() ?? '';
  const list = card?.querySelector('.card__list');

  const titleNode = practiceTitle();
  if (titleNode) titleNode.textContent = titleText;

  const bodyNode = practiceBody();
  if (bodyNode) {
    bodyNode.innerHTML = '';
    if (list) {
      const modalList = document.createElement('ul');
      modalList.className = 'modal__list';
      list.querySelectorAll('li').forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.textContent;
        modalList.appendChild(li);
      });
      bodyNode.appendChild(modalList);
    }
  }

  node.classList.remove('is-hidden');
  node.setAttribute('aria-hidden', 'false');
  node.querySelector('button')?.focus();
};

const closePracticeModal = () => {
  const node = practiceModal();
  if (!node) return;
  node.classList.add('is-hidden');
  node.setAttribute('aria-hidden', 'true');
};

const openReviewImageModal = (trigger) => {
  const node = reviewImageModal();
  const image = reviewImageModalImg();
  if (!node || !image) return;

  const src = trigger?.dataset.reviewImage || trigger?.getAttribute('src');
  const alt = trigger?.getAttribute('alt') || 'Review screenshot';
  if (!src) return;

  image.setAttribute('src', src);
  image.setAttribute('alt', alt);

  node.classList.remove('is-hidden');
  node.setAttribute('aria-hidden', 'false');
  node.querySelector('button')?.focus();
};

const closeReviewImageModal = () => {
  const node = reviewImageModal();
  if (!node) return;
  node.classList.add('is-hidden');
  node.setAttribute('aria-hidden', 'true');
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

  const openPracticeBtn = e.target.closest('[data-open-modal="practice"]');
  if (openPracticeBtn) {
    openPracticeModal(openPracticeBtn);
    return;
  }

  const openReviewImageBtn = e.target.closest('[data-review-image]');
  if (openReviewImageBtn) {
    openReviewImageModal(openReviewImageBtn);
    return;
  }

  const closeBtn = e.target.closest('[data-close-modal]');
  if (closeBtn) {
    const type = closeBtn.dataset.closeModal;
    if (type === 'practice') closePracticeModal();
    else if (type === 'review') closeReviewImageModal();
    else closeModal();
    return;
  }

  const menuToggle = e.target.closest('[data-menu-toggle]');
  if (menuToggle) {
    toggleMobileNav();
    return;
  }

  const mobileDropdownToggle = e.target.closest('[data-mobile-dropdown-toggle]');
  if (mobileDropdownToggle) {
    e.preventDefault();
    toggleMobileDropdown(mobileDropdownToggle);
    return;
  }

  const navLink = e.target.closest('.header__nav--mobile a');
  if (navLink) {
    closeMobileNav();
  }

  const anchor = e.target.closest('a[href^="#"]');
  if (anchor && !anchor.hasAttribute('data-link')) {
    const id = anchor.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (
    mobileNav()?.classList.contains('is-open') &&
    !e.target.closest('.header__nav--mobile') &&
    !e.target.closest('[data-menu-toggle]')
  ) {
    closeMobileNav();
  }

  if (e.target.closest('a[data-link]')) {
    closeMobileNav();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closePracticeModal();
    closeReviewImageModal();
  }
});

const form = () => document.getElementById('questionForm');
const hint = () => document.getElementById('formHint');

document.addEventListener('submit', (e) => {
  if (e.target !== form()) return;
  e.preventDefault();
  const node = hint();
  if (node) node.textContent = 'Sent (stub).';
});
