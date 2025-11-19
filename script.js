document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isExpanded = navLinks.style.display === 'flex';
            navLinks.style.display = isExpanded ? 'none' : 'flex';

            if (!isExpanded) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(15, 15, 15, 0.95)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid var(--border-color)';
            }
        });
    }

    // Terminal Typing Effect
    const codeText = `
class DataEngineer(Engineer):
    def __init__(self):
        self.skills = ["Python", "SQL", "Cloud"]
        self.passion = "Big Data"

    def build_pipeline(self, source):
        return transform(source)
`;
    const typeWriterElement = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < codeText.length) {
            typeWriterElement.innerHTML += codeText.charAt(i);
            i++;
            setTimeout(typeWriter, 30 + Math.random() * 50); // Random typing speed
        }
    }

    // Start typing when hero is visible
    if (typeWriterElement) {
        setTimeout(typeWriter, 1000);
    }
});
