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

    // Close menu when clicking outside of it
        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove("visible");
            }
        });

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





//for the index - homepage slides
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


//for the contact form connection to emailJS
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        emailjs.sendForm("service_o6kkwc3", "template_0or1366", this, "hmxtnp8hdI-ksJ0YA")
            .then(
                function(response) {
                    console.log("Success!", response.status, response.text);
                    window.location.href = "thankyou.html"; // Redirect after success
                },
                function(error) {
                    console.log("Failed...", error);
                }
            );
    });
});


