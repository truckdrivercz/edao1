document.addEventListener("DOMContentLoaded", () => {
    window.onload = () => {
        const elementsToAnimate = document.querySelectorAll('.fade-in');

        const observerOptions = {
            threshold: 0
        };
    
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        elementsToAnimate.forEach(element => observer.observe(element));
    }
});