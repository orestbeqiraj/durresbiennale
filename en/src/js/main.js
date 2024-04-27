window.addEventListener('load', function() {
    adjustWidth('first-juria-col-1', 'second-juria-col-1');
    adjustWidth('first-juria-col-2', 'second-juria-col-2');
    adjustWidth('first-juria-col-3', 'second-juria-col-3');
    adjustWidth('first-juria-col-4', 'second-juria-col-4');
    adjustWidth('first-juria-col-5', 'second-juria-col-5');
});

function adjustWidth(firstId, secondId) {
    var firstJuriaColWidth = document.getElementById(firstId).offsetWidth;
    var secondJuriaColWidth = document.getElementById(secondId).offsetWidth;
    var maxWidth = Math.max(firstJuriaColWidth, secondJuriaColWidth);

    document.getElementById(firstId).style.width = maxWidth + 'px';
    document.getElementById(secondId).style.width = maxWidth + 'px';
}

const text2 = document.querySelectorAll("#text2 path");

for (let i = 0; i < text2.length; i++) {
    console.log(`Letter ${i} is ${text2[i].getTotalLength()}`);
    
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.nav-mobile .hamburger');
    const mobileMenu = document.querySelector('.nav-mobile ul');
    const nav = document.querySelector("nav");
    const navHeight = nav.offsetHeight;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > navHeight) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
});
