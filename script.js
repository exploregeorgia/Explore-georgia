function setLanguage(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    el.style.display = el.classList.contains(lang) ? '' : 'none';
  });
}