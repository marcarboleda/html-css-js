// Change background color when project title is clicked
document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', function(e) {
        e.preventDefault();
        const colors = ['#0f0c29', '#24243e', '#302b63', '#1a1a2e'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('.portfolio-section').style.backgroundColor = randomColor;
    });
});

// Form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! I'll get back to you soon.`);
    this.reset();
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});