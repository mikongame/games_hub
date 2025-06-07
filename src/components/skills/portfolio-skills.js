import './portfolio-skills.css';
import htmlIcon from '../../assets/icons/html5.png';
import cssIcon from '../../assets/icons/CSS3.png';
import jsIcon from '../../assets/icons/js.png';
import reactIcon from '../../assets/icons/react.png';
import mysqlIcon from '../../assets/icons/mysql.png';
import pythonIcon from '../../assets/icons/python.png';
import nlpIcon from '../../assets/icons/nlp.png';
import tableauIcon from '../../assets/icons/tableau.png';

export function createPortfolioSkills() {
  const section = document.createElement('section');
  section.classList.add('portfolio-skills');
  section.id = 'portfolio-skills';

  const heading = document.createElement('h2');
  heading.classList.add('portfolio-section-title');
  heading.textContent = 'Skills & Tools';

  const iconsContainer = document.createElement('div');
  iconsContainer.classList.add('portfolio-skill-icons');

  const skills = [
    { src: htmlIcon, alt: 'HTML5' },
    { src: cssIcon, alt: 'CSS3' },
    { src: jsIcon, alt: 'JavaScript' },
    { src: reactIcon, alt: 'React' },
    { src: mysqlIcon, alt: 'MySQL' },
    { src: pythonIcon, alt: 'Python' },
    { src: nlpIcon, alt: 'NLP' },
    { src: tableauIcon, alt: 'Tableau' },
  ];

  skills.forEach(({ src, alt }) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add('portfolio-skill-icon');
    iconsContainer.appendChild(img);
  });

  section.append(heading, iconsContainer);
  return section;
}
