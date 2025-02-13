
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        console.log("Submit button clicked!"); // Debugging step

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            reason: document.getElementById("reason").value
        };

        console.log("Form Data:", formData); // Debugging step

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbx9CQaA27kREOioQD_NdUlG5ZhXSHdF6h_jpS4kwQ5_HMpHpwoGiV0Gz1mG1SJdeFu7/exec", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.text();
            console.log("Response:", result); // Debugging step

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
