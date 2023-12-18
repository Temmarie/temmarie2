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


  document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.filtr-item');
    const portfolioContent = document.querySelectorAll('.mu-filter-item-content');

    portfolioItems.forEach((item, index) => {
      item.addEventListener('click', function () {
        // Reset all items
        portfolioContent.forEach(content => {
          content.style.opacity = 0;
          content.style.zIndex = -1;
        });

        // Show selected item
        portfolioContent[index].style.opacity = 1;
        portfolioContent[index].style.zIndex = 1;
      });
    });
  });


  $(document).ready(function () {
    // Initialize the filter
    $('.mu-simplefilter li').click(function () {
        $('.mu-simplefilter li').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        if (filterValue == 'all') {
            $('.filtr-container .portfolio-item').show();
        } else {
            $('.filtr-container .portfolio-item').not('[data-category="' + filterValue + '"]').hide();
            $('.filtr-container .portfolio-item[data-category="' + filterValue + '"]').show();
        }
    });

    // Hover effect
    $('.portfolio-item').hover(
        function () {
            $(this).find('.project-info').css('transform', 'translateY(0)');
        },
        function () {
            $(this).find('.project-info').css('transform', 'translateY(100%)');
        }
    );
});


// portfolio

$(document).ready(function () {
  // Filter projects based on button click
  $('.filter-button').click(function () {
      var filterValue = $(this).attr('data-filter');

      if (filterValue == 'all') {
          $('.portfolio .card').show('1000');
      } else {
          $('.portfolio .card').not('.' + filterValue).hide('3000');
          $('.portfolio .card').filter('.' + filterValue).show('3000');
      }
  });

  // Add active class to the current button (highlight the selected filter)
  $('.filter-button').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
  });
});


//slick
$(document).ready(function(){
  $('.mu-testimonial-slide').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false, // Hide navigation arrows
  });
});


//form

// $(document).ready(function () {
//   // Intercept the form submission
//   $("#ajax-contact").submit(function (e) {
//       e.preventDefault();

//       // Get form data
//       var formData = $(this).serialize();

//       // Submit the form using Ajax
//       $.ajax({
//           type: "POST",
//           url: "mailer.php",
//           data: formData,
//           dataType: "json",
//           success: function (response) {
//               if (response.status === "success") {
//                   // Display success message
//                   $("#form-messages").html('<div class="alert alert-success">' + response.message + '</div>');
//               } else {
//                   // Display error message
//                   $("#form-messages").html('<div class="alert alert-danger">' + response.message + '</div>');
//               }
//           }
//       });
//   });
// });


$(document).ready(function() {
  $('#ajax-contact').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: 'POST',
          url: 'mailer.php', // Update this with your actual PHP script URL
          data: $(this).serialize(),
          success: function(response) {
              $('#confirmation-message').html(response).addClass('text-success');
              // Additional actions you may want to perform
          },
          error: function(error) {
              $('#confirmation-message').html('Error: ' + error.responseText).addClass('text-danger');
              // Additional actions you may want to perform
          }
      });
  });
});