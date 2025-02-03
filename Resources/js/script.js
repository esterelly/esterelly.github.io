// Store current index for each card
let currentIndexes = [0, 0, 0];

function showSlide(cardIndex) {
    let slides = document.querySelectorAll(`.card:nth-child(${cardIndex + 1}) .slide`);
    slides.forEach((slide, index) => {
        slide.style.opacity = (index === currentIndexes[cardIndex]) ? "1" : "0";
    });
}

function nextSlide(cardIndex) {
    let slides = document.querySelectorAll(`.card:nth-child(${cardIndex + 1}) .slide`);
    currentIndexes[cardIndex] = (currentIndexes[cardIndex] + 1) % slides.length;
    showSlide(cardIndex);
}

function prevSlide(cardIndex) {
    let slides = document.querySelectorAll(`.card:nth-child(${cardIndex + 1}) .slide`);
    currentIndexes[cardIndex] = (currentIndexes[cardIndex] - 1 + slides.length) % slides.length;
    showSlide(cardIndex);
}

// Initialize sliders
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < currentIndexes.length; i++) {
        showSlide(i);
    }
});

//project
// Store the reference to the project wrapper
document.addEventListener("DOMContentLoaded", function () {
    let projIndex = 0;
    const projects = document.querySelectorAll('.project'); 
    const projectWrapper = document.querySelector('.projectWrapper');
    const totalProjects = projects.length;

    const nextBtn = document.querySelector('.nextProj');
    const prevBtn = document.querySelector('.prevProj');

    console.log("Buttons Found:", nextBtn, prevBtn);

    nextBtn.addEventListener('click', function () {
        console.log("Next button clicked");
        projIndex = (projIndex + 1) % totalProjects;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
        console.log("Prev button clicked");
        projIndex = (projIndex - 1 + totalProjects) % totalProjects;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -projIndex * 100;
        console.log("Carousel moved to index:", projIndex);
        projectWrapper.style.transform = `translateX(${offset}%)`
        projects.forEach((project, index) => {
            if (index === projIndex) {
                project.style.opacity = "1";
                project.style.zIndex = "1";
            } else {
                project.style.opacity = "0";
                project.style.zIndex = "0";
            }
        });;
    }
    updateCarousel();
});

