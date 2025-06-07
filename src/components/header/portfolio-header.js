import './portfolio-header.css';

export function createPortfolioHeader() {
  const header = document.createElement('header');
  header.classList.add('portfolio-header');

  const title = document.createElement('h1');
  title.classList.add('portfolio-logo');
  title.textContent = 'Miguel García Melgar';

  const menuToggle = document.createElement('button');
  menuToggle.classList.add('menu-toggle');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
  menuToggle.textContent = '☰';

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.classList.add('portfolio-nav-menu');

  const sections = [
    { text: 'About', anchor: '#portfolio-about' },
    { text: 'Skills', anchor: '#portfolio-skills' },
    { text: 'Experience', anchor: '#portfolio-experience' },
    { text: 'Projects', anchor: '#portfolio-projects' },
    { text: 'Contact', anchor: '#portfolio-contact' }
  ];

  sections.forEach(({ text, anchor }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = anchor;
    a.textContent = text;
    a.classList.add('portfolio-nav-link');
    li.appendChild(a);
    ul.appendChild(li);
  });

  menuToggle.addEventListener('click', () => {
    ul.classList.toggle('show');
  });

  ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      ul.classList.remove('show');
    }
  });

  nav.appendChild(ul);
  header.append(title, menuToggle, nav);
  return header;
}
