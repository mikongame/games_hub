import './portfolio-about.css';

export function createPortfolioAbout() {
  const section = document.createElement('section');
  section.classList.add('portfolio-about');
  section.id = 'portfolio-about';

  const heading = document.createElement('h2');
  heading.classList.add('portfolio-section-title');
  heading.textContent = 'About Me';

  const paragraph = document.createElement('p');
  paragraph.classList.add('portfolio-about-text');
  paragraph.textContent = `I’m a curious and polyvalent developer with a background in psychology and data science. 
  I love crafting clean interfaces and scalable code — while integrating analytics when it makes sense. 
  Currently building Mikon Insights, where I combine my skills in web development, app creation and human behaviour modeling.`;

  section.append(heading, paragraph);
  return section;
}
