document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


//slider

  document.addEventListener('DOMContentLoaded', function () {
    // Typed.js initialization
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      startDelay: 1000, // delay before starting to type
      backDelay: 1000, // delay before starting to backspace
      loop: true, // loop the animation indefinitely
    });
  });