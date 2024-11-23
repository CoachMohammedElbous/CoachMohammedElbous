new Swiper('.card-wrapper', {
    // Optional parameters

    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      0:{
        slidesPerView: 1
      } ,
      768:{
        slidesPerView: 2
      } ,
      900:{
        slidesPerView: 3
      } ,
    }
  
  });
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const checkbox = document.getElementById("check");
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        checkbox.checked = false; // Uncheck the checkbox to close the menu
      });
    });
  });
  const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Bodybilding', 'Fat Loss','Gain weight'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay: 100,
    loop:true

  });
  
  
