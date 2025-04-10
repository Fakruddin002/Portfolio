
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu when toggle icon is clicked
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu when close icon is clicked
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Hide menu when any link inside the menu is clicked
const navLinks = document.querySelectorAll('.nav__menu .nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')

if(contactForm){
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault()

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
        .then(() => {
            alert('Message sent successfully!')
            contactForm.reset()
        }, (error) => {
            alert('Failed to send message. Error: ' + JSON.stringify(error))
        })
    })
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink.classList.add('active-link')
        } else {
            sectionLink.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// ========== SCROLLREVEAL ANIMATIONS ==========
// Include ScrollReveal CDN before this script:
// <script src="https://unpkg.com/scrollreveal"></script>

const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    reset: false
  });
  
  // HOME
  sr.reveal('.home__container, .home__img, .home__data, .home__scroll', {
    origin: 'bottom',
    delay: 100,
    interval: 100
  });
  
  // INFO / ABOUT
  sr.reveal('.info__title, .about__content, .about__img', {
    origin: 'bottom',
    delay: 200,
    interval: 150
  });
  
  // EDUCATION (SERVICES)
  sr.reveal('.services__card', {
    origin: 'bottom',
    delay: 300,
    interval: 150
  });
  
  // PROJECTS (WORK)
  sr.reveal('.work__card', {
    origin: 'bottom',
    delay: 400,
    interval: 200
  });
  
  // SKILLS
  sr.reveal('.skills__item', {
    origin: 'bottom',
    delay: 500,
    interval: 100
  });
  
  // CERTIFICATIONS / INTERNSHIP
  sr.reveal('.internship__card, .certification__list li', {
    origin: 'bottom',
    delay: 600,
    interval: 120
  });
  
  // CONTACT
  sr.reveal('.contact__content, .contact__form', {
    origin: 'bottom',
    delay: 700,
    interval: 150
  });
  
  // FOOTER
  sr.reveal('.footer__container', {
    origin: 'bottom',
    delay: 800
  });
  
  // ACHIEVEMENTS (if added)
  sr.reveal('.achievements__card', {
    origin: 'bottom',
    delay: 900,
    interval: 100
  });
  