//step 1: get DOM
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }


let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeRunning = 3000;

// Move the first thumbnail to the end
thumbnailBorderDom.appendChild(thumbnailBorderDom.querySelector('.item'));

let runTimeOut;

// Event listeners for the arrows
nextDom.onclick = () => showSlider('next');
prevDom.onclick = () => showSlider('prev');

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.item');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    // Remove animation class after timeRunning
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);
}




/*mula dito*/
/*modals*/




// Select all "SEE MORE" buttons
const seeMoreButtons = document.querySelectorAll(".buttons button:first-child");


// Function to open the modal
seeMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(`largeModal${index + 1}`);
        modal.style.display = "block";
    });
});


// Close modal when "X" is clicked
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        const modal = closeButton.closest(".modal");
        modal.style.display = "none";
    });
});


// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


// Carousel functionality for modals
const modalCarousels = document.querySelectorAll('.modal-carousel');
modalCarousels.forEach((modalCarousel) => {
    const carouselInner = modalCarousel.querySelector('.carousel-inner');
    const carouselItems = modalCarousel.querySelectorAll('.carousel-item');
    const carouselPrev = modalCarousel.querySelector('.carousel-prev');
    const carouselNext = modalCarousel.querySelector('.carousel-next');
   
    let activeItem = 0;


    carouselPrev.addEventListener('click', () => {
        activeItem--;
        if (activeItem < 0) {
            activeItem = carouselItems.length - 1;
        }
        updateCarousel();
    });


    carouselNext.addEventListener('click', () => {
        activeItem++;
        if (activeItem >= carouselItems.length) {
            activeItem = 0;
        }
        updateCarousel();
    });


    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === activeItem) {
                item.classList.add('active');
            }
        });
    }
});


/*hanggang dito yung ilalagay na javascript*/

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



