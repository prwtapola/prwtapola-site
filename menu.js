document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const dropdownLinks = document.querySelectorAll(".dropdown > a");

    // Toggle the main menu on small screens when ☰ button is clicked
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("visible");
        });
    }

    // Dropdown Menu Click Behavior (for tablets & mobile)
    dropdownLinks.forEach((dropdownLink) => {
        dropdownLink.addEventListener("click", function (event) {
            if (window.innerWidth <= 1280) { // Apply for tablets & smaller
                const parentDropdown = this.parentElement;

                if (!parentDropdown.classList.contains("dropdown-active")) {
                    event.preventDefault(); // Stop navigation on first click
                    parentDropdown.classList.add("dropdown-active");

                    // Close other open dropdowns
                    document.querySelectorAll(".dropdown").forEach((dropdown) => {
                        if (dropdown !== parentDropdown) {
                            dropdown.classList.remove("dropdown-active");
                        }
                    });
                } else {
                    // Allow navigation on second click
                    window.location.href = this.href;
                }
            }
        });
    });
});






let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.style.display = i === n ? "block" : "none";
        dots[i].classList.toggle("active", i === n);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

// Manual slide control
function currentSlide(n) {
    slideIndex = n - 1;
    showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide on load
showSlide(slideIndex);
