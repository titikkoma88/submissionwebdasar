const menuToggle = document.querySelector('.menu-toggle input');
const navbarMenu = document.querySelector('.navbar ul');
const navbarLinks = document.querySelectorAll('.navbar a');

// Slide Hamburger Menu / Menu Toggle on Mobile Screen
menuToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('slide');
});

navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));

// Close Slider After Click Navbar List
function navbarLinkClick(event) {
    if (navbarMenu.classList.contains('slide')) {
        menuToggle.click();
    }
};

// Animation Aside Profil with Parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if (wScroll > $('.profil').offset().top - 370) {
        $('.profil .card').each(function(i) {
            setTimeout(function() {
                $('.profil .card').eq(i).addClass('muncul');
            }, 300 * i);
        });
    }
});