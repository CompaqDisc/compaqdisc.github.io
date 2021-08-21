window.onload = init;
window.onscroll = processScroll;

function init() {
  document.getElementById('dark-mode-toggle').onclick = toggleDarkMode;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function processScroll() {
  const triggerPoint = 100;
  if (document.body.scrollTop > triggerPoint || document.documentElement.scrollTop > triggerPoint) {
    document.body.classList.add('shrink-header');
  } else {
    document.body.classList.remove('shrink-header');
  }
}