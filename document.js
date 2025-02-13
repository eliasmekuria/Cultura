
document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        reason: document.getElementById("reason").value
    };

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyd_qTqQNoF4sQW4vN0fCPAuTw9C9KQ7sbHwyGHSOjtZAIDWGQ7aADi_nzkq1Fdvfu4/exec", {
            method: "POST",
            mode: "cors", // Ensure CORS isn't blocking it
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text(); // Handle response from Google Apps Script

        if (response.ok) {
            alert("Form submitted successfully! ✅");
            document.getElementById("contactForm").reset(); // Clear form
        } else {
            alert("Error submitting form: " + result);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }
});




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
