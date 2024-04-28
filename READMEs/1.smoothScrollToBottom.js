function smoothScrollToBottom(duration) {
    const start = window.scrollY; // Starting scroll position
    const end = document.body.scrollHeight; // Scroll target (bottom of the page)
    const distance = end - start; // Total distance to scroll
    const startTime = new Date().getTime(); // Start time of the animation

    // Animation function that runs at set intervals
    function animate() {
        const currentTime = new Date().getTime(); // Current time
        const elapsed = currentTime - startTime; // Time elapsed since the start
        const progress = Math.min(1, elapsed / duration); // Progress (0 to 1)

        // Ease-in-out function for smooth acceleration and deceleration
        const easedProgress = (1 - Math.cos(progress * Math.PI)) / 2;

        // Current position based on the eased progress
        const scrollPosition = start + (distance * easedProgress);

        // Scroll to the current position
        window.scrollTo(0, scrollPosition);

        if (progress < 1) {
            requestAnimationFrame(animate); // Continue the animation until completed
        }
    }

    // Start the animation
    requestAnimationFrame(animate);
}