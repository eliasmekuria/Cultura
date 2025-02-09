document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll(".slide-up");

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
        }, index * 500); // Stagger effect (500ms delay per line)
    });
});


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
