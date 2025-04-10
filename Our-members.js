// For navbar

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


// for slider

const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    // Function to display the current card
    const showCard = (index) => {
        cards.forEach((card, i) => {
            card.style.display = i === index ? "block" : "none";
        });
    };

    // Event listeners for navigation buttons
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    // Check screen width and disable slider if width is greater than 768px
    const checkScreenWidth = () => {
        if (window.innerWidth > 1024) {
            // Show all cards and hide the slider buttons
            cards.forEach(card => card.style.display = "block");
            prevButton.style.display = "none";
            nextButton.style.display = "none";
        } else {
            // Use slider functionality
            prevButton.style.display = "block";
            nextButton.style.display = "block";
            showCard(currentIndex);
        }
    };

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop back
        showCard(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length; // Loop forward
        showCard(currentIndex);
    });

    // Show the first card initially
    checkScreenWidth();

    // Listen for window resize events to update the display
    window.addEventListener('resize', checkScreenWidth);