// Function to toggle the menu
function toggleMenu() {
    const navbarUl = document.querySelector('.navbar ul');
    navbarUl.classList.toggle('active'); // Toggle 'active' class
    attachCloseHandler(); // Attach event listener to close on outside click
}

// Function to close the sidebar
function closeMenu() {
    const navbarUl = document.querySelector('.navbar ul');
    navbarUl.classList.remove('active'); // Remove 'active' class
}

// Function to attach the event listener that closes the menu when clicking outside
function attachCloseHandler() {
    const navbarUl = document.querySelector('.navbar ul');
    document.addEventListener('click', function handler(event) {
        // Check if the click is outside the navbar and hamburger
        const isClickInsideNavbar = navbarUl.contains(event.target);
        const isClickInsideHamburger = document.querySelector('.hamburger').contains(event.target);
        
        if (!isClickInsideNavbar && !isClickInsideHamburger) {
            closeMenu();
            document.removeEventListener('click', handler); // Remove listener after execution
        }
    });
}

// Initialize Swiper
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto", // Automatically adjusts slides per view based on screen size
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 2,
        slideShadows: true,
    },
    keyboard: {
        enabled: true,
    },
    mousewheel: {
        thresholdDelta: 70,
    },
    autoplay: {
        delay: 3000, // Delay between slides (in milliseconds)
        disableOnInteraction: false, // Keep autoplay active even when interacting with the swiper
    },
    spaceBetween: 20, // Adjust space between slides for responsiveness
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Function to autoplay previous slides
function autoplayPrevious() {
    if (swiper.activeIndex > 0) {
        swiper.slideTo(swiper.activeIndex - 1); // Slide to the previous index
    } else {
        swiper.autoplay.stop(); // Stop autoplay when reaching the first slide
    }
}

// Event listener for when the last slide is reached
swiper.on('reachEnd', function () {
    // Start a loop to autoplay the previous slides
    const interval = setInterval(() => {
        autoplayPrevious(); // Call the function to slide to the previous slide
        if (swiper.activeIndex === 0) {
            clearInterval(interval); // Stop the interval when the first slide is reached
        }
    }, 3000); // Adjust the interval duration to match your autoplay delay
});