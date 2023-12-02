// SCRIPT POUR UN SCROLL FLUIDE
document.addEventListener("DOMContentLoaded", function () {
  var scrollLinks = document.querySelectorAll('.scroll-link');

  scrollLinks.forEach(function (scrollLink) {
      scrollLink.addEventListener('click', function (e) {
          e.preventDefault();

          var targetId = this.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);

          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});

