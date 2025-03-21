
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confettiButton").addEventListener("click", function () {
        var duration = 5 * 1000; // 5 seconds
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    });
});
