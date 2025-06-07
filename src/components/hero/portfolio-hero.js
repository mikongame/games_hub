import './portfolio-hero.css';
import profileImg from '../../assets/images/Miguel-García-Melgar-2.png';

export function createPortfolioHero() {
  const section = document.createElement('section');
  section.classList.add('portfolio-hero');
  section.id = 'portfolio-hero';

  const textContainer = document.createElement('div');
  textContainer.classList.add('portfolio-hero-text');

  const heading = document.createElement('h2');
  heading.textContent = 'Hi, I’m Miguel 👋';

  const subheading = document.createElement('p');
  subheading.textContent = 'I build digital experiences that combine data science and web/mobile development.';

  textContainer.append(heading, subheading);

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('portfolio-hero-img-wrapper');

  const image = document.createElement('img');
  image.src = profileImg;
  image.alt = 'Miguel García Melgar';
  image.classList.add('portfolio-hero-img');

  imageWrapper.appendChild(image);
  section.append(textContainer, imageWrapper);
  return section;
}
