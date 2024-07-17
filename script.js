// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target.getAttribute('href');
      const targetSection = document.querySelector(target);
      const offsetTop = targetSection.offsetTop;
      const animationDuration = 1000; // 1 second
  
      // Add animation to navigation link
      link.classList.add('animate-link');
  
      // Animate scroll to target section
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
  
      // Add animation to target section
      targetSection.classList.add('animate-section');
  
      // Add animation to navigation bar
      document.querySelector('nav').classList.add('animate-nav');
  
      // Remove animation classes after animation duration
      setTimeout(() => {
        link.classList.remove('animate-link');
        targetSection.classList.remove('animate-section');
        document.querySelector('nav').classList.remove('animate-nav');
      }, animationDuration);
    });
  });
  
  // Add event listener to window scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
  
      if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
        // Add active class to navigation link
        document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
  
        // Add animation to navigation link
        document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('animate-link-active');
      } else {
        // Remove active class from navigation link
        document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
  
        // Remove animation from navigation link
        document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('animate-link-active');
      }
    });
  });

  // Add a loading animation to the body
document.body.classList.add('loading');

// Simulate a loading delay
setTimeout(() => {
  // Remove the loading animation
  document.body.classList.remove('loading');

  // Animate the navigation bar
  const navbar = document.querySelector('nav');
  navbar.classList.add('animate');

  // Animate the sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.classList.add('animate');
  });
}, 2000);

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const section = document.querySelector(target);
    section.classList.add('animate');
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  });
});

// Animation system
class Animation {
    constructor(element, animationName, duration, delay = 0) {
      this.element = element;
      this.animationName = animationName;
      this.duration = duration;
      this.delay = delay;
      this.startTime = null;
    }
  
    start() {
      this.startTime = performance.now();
      this.element.classList.add(this.animationName);
      this.element.style.animationDuration = `${this.duration}ms`;
      this.element.style.animationDelay = `${this.delay}ms`;
    }
  
    stop() {
      this.element.classList.remove(this.animationName);
    }
  }
  
  // Animation definitions
  const animations = {
    fadein: {
      animation: 'fadein',
      duration: 500,
      delay: 0,
    },
    fadeout: {
      animation: 'fadeout',
      duration: 500,
      delay: 0,
    },
    slidein: {
      animation: 'lidein',
      duration: 1000,
      delay: 0,
    },
    slideout: {
      animation: 'lideout',
      duration: 1000,
      delay: 0,
    },
  };
  
  // Animation styles
  const styles = `
   .fadein {
      animation: fadein 500ms forwards;
    }
   .fadeout {
      animation: fadeout 500ms forwards;
    }
   .slidein {
      animation: slidein 1000ms forwards;
    }
   .slideout {
      animation: slideout 1000ms forwards;
    }
  
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  
    @keyframes fadeout {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  
    @keyframes slidein {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  
    @keyframes slideout {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;
  
  // Add animation styles to the page
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
  
  // Example usage
  const element = document.getElementById('my-element');
  
  const animation = new Animation(element, animations.fadein.animation, animations.fadein.duration, animations.fadein.delay);
  animation.start();
  
  // Stop the animation after 2 seconds
  setTimeout(() => {
    animation.stop();
  }, 2000);