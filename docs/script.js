window.addEventListener('load', () => {
      // Reveal the entire hero section first
      // setTimeout(() => {
        const hero = document.getElementById('hero');
        hero.classList.remove('opacity-0', 'translate-y-4');

        // Now animate each <li> with a staggered delay
        const listItems = document.querySelectorAll('.fade-item');
        listItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('opacity-0', 'translate-y-4');
          }, 300 + index * 200); // start after hero (1.8s), then stagger by 400ms
        });
      // }, 500);
    });
    const cards = document.querySelectorAll('[id^="job-card"]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-float-up');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("#navbar a");

    // Scroll-based update
    function updateActiveLinkOnScroll() {
      let scrollPos = window.scrollY + 150; // adjust based on your header height
      let currentSectionId = "";

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active-link");
        }
      });
    }

    // Click-based update
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active-link"));
        link.classList.add("active-link");
      });
    });

    // Trigger on scroll
    window.addEventListener("scroll", updateActiveLinkOnScroll);
  });


// responsive hamburger menu for navbar
const menuBtn = document.getElementById('menu-btn');
  const navList = document.querySelector('#navbar ul');

  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

    function showThankYou(event) {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => {
      form.style.display = 'none';
      document.getElementById('thankyou').style.display = 'block';
    })
    .catch(error => {
      alert('Oops! Something went wrong.');
    });
  }
