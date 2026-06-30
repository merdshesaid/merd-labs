const pages = Array.from(document.querySelectorAll('.page'));
const navLinks = Array.from(document.querySelectorAll('[data-page]'));
const navMenu = document.getElementById('navLinks');
const menuBtn = document.getElementById('menuBtn');

function showPage() {
  const id = (location.hash || '#home').replace('#', '') || 'home';
  const pageId = document.getElementById(id) ? id : 'home';

  pages.forEach(page => page.classList.toggle('active', page.id === pageId));
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageId));
  navMenu.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

menuBtn.addEventListener('click', () => navMenu.classList.toggle('open'));
window.addEventListener('hashchange', showPage);
showPage();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject') || 'Merdlabs contact';
  const message = data.get('message');
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  window.location.href = `mailto:thats.osmani@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
