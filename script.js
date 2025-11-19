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

    // PixiJS Background Effect
    if (typeof PIXI !== 'undefined') {
        const app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x0f0f0f,
            backgroundAlpha: 0, // Transparent to let CSS bg show if needed, but we want stars on top
            resizeTo: window
        });

        // Set canvas ID and style
        app.view.id = 'pixi-canvas';
        app.view.style.position = 'fixed';
        app.view.style.top = '0';
        app.view.style.left = '0';
        app.view.style.width = '100%';
        app.view.style.height = '100%';
        app.view.style.zIndex = '-1';
        app.view.style.pointerEvents = 'none';

        document.body.appendChild(app.view);

        // Create stars
        const starCount = 200;
        const stars = [];

        for (let i = 0; i < starCount; i++) {
            const star = new PIXI.Graphics();
            star.beginFill(0xffffff);
            star.drawCircle(0, 0, Math.random() * 1.5); // Random size
            star.endFill();

            star.x = Math.random() * app.screen.width;
            star.y = Math.random() * app.screen.height;
            star.alpha = Math.random() * 0.5 + 0.1; // Random opacity

            // Custom properties for animation
            star.direction = Math.random() * Math.PI * 2;
            star.speed = Math.random() * 0.5 + 0.1;

            app.stage.addChild(star);
            stars.push(star);
        }

        // Animation Loop
        app.ticker.add(() => {
            stars.forEach(star => {
                star.x += Math.cos(star.direction) * star.speed;
                star.y += Math.sin(star.direction) * star.speed;

                // Wrap around screen
                if (star.x < 0) star.x = app.screen.width;
                if (star.x > app.screen.width) star.x = 0;
                if (star.y < 0) star.y = app.screen.height;
                if (star.y > app.screen.height) star.y = 0;
            });
        });
    }
});
