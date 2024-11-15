// Scroll Reveal Effect
document.addEventListener("DOMContentLoaded", function () {
    let scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    window.addEventListener('scroll', function () {
        scrollRevealElements.forEach(function (element) {
            let elementPosition = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    });
});
