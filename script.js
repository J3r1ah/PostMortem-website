document.getElementById('myLink').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});
const link = document.getElementById('myLink');
link.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#45a049';
});
link.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
});
