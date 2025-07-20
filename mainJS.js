/*************************************** skills section js start***************************************/
const filterButtons = document.querySelectorAll('.filter-btn');
const techCards = document.querySelectorAll('.tech-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    techCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'flex';
      } else {
        card.style.display = card.classList.contains(filter) ? 'flex' : 'none';
      }
    });
  });
});
/*************************************** skills section js Ends***************************************/ 
/***************************************************************************************************** */
 const navLinks = document.querySelectorAll('.nav-links li a');
  const activeLink = localStorage.getItem('activeLink');

  if (activeLink) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === activeLink) {
        link.classList.add('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
      localStorage.setItem('activeLink', link.getAttribute('href'));
    });
  });
/***************************************************************************************************** */
/*************************************** Project section js start***************************************/
// function toggleDescription(card) {
//   const desc = card.querySelector('.description');
//   const isVisible = desc.style.display === 'block';
//   desc.style.display = isVisible ? 'none' : 'block';
// }

/*************************************** project section js Ends***************************************/ 
/*************************************** MenuBar section js starts***************************************/ 
  const menuIcon = document.getElementById('menuToggle');
  const navLink = document.getElementsByClassName('navLinks');

  menuIcon.addEventListener('click', () => {
    navLink.classList.toggle('active');
  });
/************************************************************************************************** */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  mobileMenu.classList.add("open");
  overlay.classList.add("active");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("active");
}

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  openMenu();
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});


  