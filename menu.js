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
// Select elements
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const sliderContainer = document.querySelector(".slides-container"); // The main slider wrapper

// Show a specific slide
function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.style.display = i === n ? "block" : "none";
        dots[i].classList.toggle("active", i === n);
    });
}

// Function to move slides using arrows
function changeSlide(direction) {
    slideIndex += direction;

    // Loop back to first slide if at the end
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    showSlide(slideIndex);
}

// Manual slide control using dots
function currentSlide(n) {
    slideIndex = n; // Set index to clicked dot
    showSlide(slideIndex);
}

// Attach event listeners to dots (manual control)
if (dots.length > 0) {
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => currentSlide(i));
    });
}

// **SWIPE FUNCTIONALITY FOR TOUCHSCREENS**
let touchStartX = 0;
let touchEndX = 0;

if (sliderContainer) {
    // Detect touch start
    sliderContainer.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    // Detect touch end
    sliderContainer.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });
}


// Function to determine swipe direction
function handleSwipe() {
    let swipeThreshold = 50; // Minimum distance required to register a swipe
    if (touchStartX - touchEndX > swipeThreshold) {
        changeSlide(1); // Swipe left → Next slide
    } else if (touchEndX - touchStartX > swipeThreshold) {
        changeSlide(-1); // Swipe right → Previous slide
    }
}

// Show the first slide on page load
if (slides.length > 0) {
    showSlide(slideIndex);
}





let lastSubmissionTime = 0;

//for the contact form connection to emailJS
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("hmxtnp8hdI-ksJ0YA");
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        const now = Date.now();
        if (now - lastSubmissionTime < 10000) { // 10 seconds delay
            alert("Please wait before submitting again.");
                return;
        }
        lastSubmissionTime = now;

        emailjs.sendForm("service_o6kkwc3", "template_0or1366", this)
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




