import './portfolio-contact.css';

export function createPortfolioContact() {
  const section = document.createElement('section');
  section.classList.add('portfolio-contact');
  section.id = 'portfolio-contact';

  const heading = document.createElement('h2');
  heading.classList.add('portfolio-section-title');
  heading.textContent = 'Let’s Talk';

  const form = document.createElement('form');
  form.classList.add('portfolio-contact-form');
  form.setAttribute('action', 'mailto:mikongame@gmail.com');
  form.setAttribute('method', 'post');
  form.setAttribute('enctype', 'text/plain');

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = 'Your Name';
  nameInput.required = true;
  nameInput.minLength = 3;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Your Email';
  emailInput.required = true;
  emailInput.pattern = '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$';

  const messageTextarea = document.createElement('textarea');
  messageTextarea.name = 'message';
  messageTextarea.placeholder = 'Your Message';
  messageTextarea.rows = 5;
  messageTextarea.required = true;

  const interestLabel = document.createElement('p');
  interestLabel.textContent = "I'm interested in ...";
  interestLabel.classList.add('portfolio-interest-label');

  const interestGroup = document.createElement('div');
  interestGroup.classList.add('portfolio-interest-group');

  const interestOptions = [
    'Ecommerce Website',
    'Database',
    'Landing Page',
    'Dashboard',
    'ML custom model',
    'Mobile App'
  ];

  const selectedInterests = new Set();

  const interestHiddenInput = document.createElement('input');
  interestHiddenInput.type = 'hidden';
  interestHiddenInput.name = 'interests';

  interestOptions.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('portfolio-interest-button');
    button.textContent = option;

    button.addEventListener('click', () => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        selectedInterests.delete(option);
      } else {
        button.classList.add('selected');
        selectedInterests.add(option);
      }

      interestHiddenInput.value = Array.from(selectedInterests).join(', ');
    });

    interestGroup.appendChild(button);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Send Message';

  form.append(
    nameInput,
    emailInput,
    messageTextarea,
    interestLabel,
    interestGroup,
    interestHiddenInput,
    submitButton
  );

  section.append(heading, form);
  return section;
}
