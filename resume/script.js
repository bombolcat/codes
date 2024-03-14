document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const submitBtn = document.getElementById("submit-btn");

    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight / 1.5;

            if (position < screenHeight) {
                section.classList.add("fade-in", "active");
            }
        });
    });

    // Adding button animation on click
    submitBtn.addEventListener("click", function() {
        submitBtn.classList.add("button-animation");
        setTimeout(() => {
            submitBtn.classList.remove("button-animation");
        }, 1000);
    });
});
