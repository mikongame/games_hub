import './style/portfolio-style.css';
import { createPortfolioHeader } from './components/header/portfolio-header.js';
import { createPortfolioHero } from './components/hero/portfolio-hero.js';
import { createPortfolioAbout } from './components/about/portfolio-about.js';
import { createPortfolioSkills } from './components/skills/portfolio-skills.js';
import { createPortfolioExperience } from './components/experience/portfolio-experience.js';
import { createPortfolioProjects } from './components/projects/portfolio-projects.js';
import { createPortfolioContact } from './components/contact/portfolio-contact.js';
import { createPortfolioFooter } from './components/footer/portfolio-footer.js';

const app = document.querySelector('#app');

app.append(
  createPortfolioHeader(),
  createPortfolioHero(),
  createPortfolioAbout(),
  createPortfolioSkills(),
  createPortfolioExperience(),
  createPortfolioProjects(),
  createPortfolioContact(),
  createPortfolioFooter()
);
