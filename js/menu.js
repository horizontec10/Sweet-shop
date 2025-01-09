// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        
        const targetSection = document.getElementById(targetId);
        
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        menuLinks.forEach(item => item.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 100;
    
    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
});
