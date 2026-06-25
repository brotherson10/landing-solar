document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-list a');

    const toggleMenu = () => {
        navList.classList.toggle('active');
        toggleBtn.classList.toggle('active');
        header.classList.toggle('menu-open');
    };

    toggleBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            toggleBtn.classList.remove('active');
            header.classList.remove('menu-open');
        });
    });

    const updateHeader = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader);

    const elementos = document.querySelectorAll('[data-anima]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animado');
            }
        });
    }, {
        threshold: 0.14
    });

    elementos.forEach(el => observer.observe(el));
});
