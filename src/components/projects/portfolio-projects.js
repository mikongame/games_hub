import './portfolio-projects.css';
import mbtiImg from '../../assets/projects/mbti.png';
import churnImg from '../../assets/projects/churn.webp';
import attritionImg from '../../assets/projects/attrition.webp';
import mikonImg from '../../assets/projects/mikon.webp';
import pinterestImg from '../../assets/projects/pinterest.png';
import tictactoeImg from '../../assets/projects/tictactoe.png';


export function createPortfolioProjects() {
  const section = document.createElement('section');
  section.classList.add('portfolio-projects');
  section.id = 'portfolio-projects';

  const heading = document.createElement('h2');
  heading.classList.add('portfolio-section-title');
  heading.classList.add('portfolio-project-section-title');
  heading.textContent = 'Projects';

  const grid = document.createElement('div');
  grid.classList.add('portfolio-project-grid');

  const projects = [
    {
      title: 'Mikon Insights Website',
      description: 'Business site built with HTML, CSS and JS to present data projects, services and brand.',
      image: mikonImg,
      link: 'https://mikoninsights.es'
    },
    {
      title: 'Pinterest Clone',
      description: 'Frontend layout built with HTML, CSS and JavaScript using Unsplash API and component-based structure.',
      image: pinterestImg,
      link: 'https://cloningpinterest.netlify.app/'
    },
    {
      title: 'Tic Tac Toe + Monte Carlo AI',
      description: 'Tic Tac Toe game with CPU opponent and optional AI using Monte Carlo in JavaScript.',
      image: tictactoeImg,
      link: 'https://montecarlotictactoe.netlify.app/'
    },
    {
      title: 'Churn Prediction (Case Study)',
      description: 'Customer churn modeling project using classification algorithms and SHAP for explainability.',
      image: churnImg,
      link: 'https://mikoninsights.es/?case=churn'
    },
    {
      title: 'Talent Attrition Analysis',
      description: 'People Analytics case study focused on employee retention. Combines business insights and ML.',
      image: attritionImg,
      link: 'https://mikoninsights.es/?case=attrition'
    },
    {
      title: 'MBTI Personality Classifier',
      description: 'NLP model that predicts Myers-Briggs personality type from text. Built in Python using scikit-learn and SpaCy.',
      image: mbtiImg,
      link: 'https://github.com/mikongame/NLP-to-predict-Myers-Briggs-Personality-Type'
    }
  ];

  projects.forEach(({ title, description, link, image }) => {
    const card = document.createElement('div');
    card.classList.add('portfolio-project-card');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;
    projectTitle.classList.add('portfolio-project-title');

    const projectImage = document.createElement('img');
    projectImage.src = image;
    projectImage.classList.add('portfolio-project-image');

    const projectDesc = document.createElement('p');
    projectDesc.textContent = description;

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('portfolio-project-description');
    textWrapper.appendChild(projectDesc);

    const projectMain = document.createElement('div');
    projectMain.classList.add('portfolio-project-main');
    projectMain.append(projectTitle, projectImage, textWrapper);

    const projectLink = document.createElement('a');
    projectLink.href = link;
    projectLink.target = '_blank';
    projectLink.textContent = 'View App';
    projectLink.classList.add('cta-btn');

    card.append(projectMain, projectLink);
    grid.appendChild(card);
  });

  section.append(heading, grid);
  return section;
}
