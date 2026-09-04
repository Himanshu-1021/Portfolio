// 1. Theme Switcher Interaction
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check stored preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
});

// 2. Interactive Form Submission
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    statusMsg.textContent = 'Please fill out all required fields.';
    statusMsg.style.color = '#ef4444';
    return;
  }

  statusMsg.textContent = `Thanks, ${name}! Your message has been sent.`;
  statusMsg.style.color = '#22c55e';
  form.reset();
});