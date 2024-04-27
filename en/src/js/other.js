const hamburger = document.querySelector('.header-other nav .nav-mobile .hamburger-other');
const mobile_menu = document.querySelector('.header-other nav .nav-mobile ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    const iconListItems = document.querySelectorAll('#other .ci');

    iconListItems.forEach(link => {
        if (this.window.scrollY > 50) {
            link.style.color = 'white';
        } else {
            link.style.color = '#000';
        }
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    const navLinks = document.querySelectorAll('#other li a');

    function setActiveLine() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.parentNode.classList.add('active');
                    } else {
                        link.parentNode.classList.remove('active');
                    }
                });
            }
        });
    }

    if (window.scrollY > 50) {
        header.classList.add('sticky');
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        header.classList.remove('sticky');
        navLinks.forEach(link => {
            link.style.color = '#000';
        });
    }

    setActiveLine();
});

window.addEventListener('DOMContentLoaded', function() {
    setActiveLine();
});

const navButtons = document.querySelectorAll('.header-other nav .nav-mobile ul li a');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const navMobileUl = document.querySelector('.header-other nav .nav-mobile.active ul');
        navMobileUl.classList.remove('active');
    });
});
