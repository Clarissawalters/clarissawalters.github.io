// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let clickCount = 0;

const messages = {
    1: "Sloths can hold their breath longer than dolphins.",
    2: "Bananas are berries, but strawberries aren't.",
    3: "Octopuses have three hearts, and when they get too stressed, they might just... eat themselves. Take care of yourself out there..."
};

document.getElementById("myButton").addEventListener("click", function () {
    clickCount = (clickCount % 5) + 1;
    document.getElementById("message").textContent = messages[clickCount];
});

