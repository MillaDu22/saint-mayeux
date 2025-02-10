export function observeSections() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, options);

    document.querySelectorAll('.fade-section').forEach(section => {
        observer.observe(section);
    });
}
