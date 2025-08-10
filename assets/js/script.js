document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', function(e) {
        e.preventDefault();
        const colors = ['#120f31ff', '#24243e', '#302b63', '#1a1a2e', '#615d48ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('.project-section').style.backgroundColor = randomColor;
    });
});

// Form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! I'll get back to you soon.`);
    this.reset();
});
