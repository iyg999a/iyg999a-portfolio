if (window.innerWidth < 1024) {
    alert("Please view this portfolio on a laptop/computer for the best experience.");
}
const projects = [
    {
        title: "DMAT",
        description: "A mess management system built using HTML, CSS, JavaScript, Node.js and MongoDB.",
        image: "./src/images/dmat.png",
        github: "https://github.com/iyg999a/MessProject"
    },
    {
        title: "LMS",
        description: "Library Management System prototype.",
        image: "./src/images/lms.png",
        github: "https://github.com/iyg999a/Library-Management-Prototype"
    },
    {
        title: "PostIT",
        description: "A social media style posting application.",
        image: "./src/images/postit.png",
        github: "https://github.com/iyg999a/test-PostIT"
    },
    {
        title: "Portfolio",
        description: "My personal developer portfolio.",
        image: "./src/images/portfolio.png",
        github: "https://github.com/iyg999a"
    }
];

let current = 0;

const leftCard = document.querySelector(".left-card");
const centerCard = document.querySelector(".center-card");
const rightCard = document.querySelector(".right-card");

const githubBtn = document.getElementById("githubBtn");

function fillCard(card, project){
    const image = card.querySelector("img");
    const title = card.querySelector("h2");

    image.src = project.image;
    image.alt = project.title;


    title.textContent = project.title;
}

function updateCarousel(){
    let left = current -1;
    let right = current+1;

    if(left<0){
            left = projects.length-1;
    }

    if(right>= projects.length){
        right =0;
    }

    fillCard(leftCard, projects[left]);
    fillCard(centerCard, projects[current]);
    fillCard(rightCard, projects[right]);

    githubBtn.href = projects[current].github;
}

document.getElementById("next").addEventListener("click", () => {

    current++;

    if(current >= projects.length){
        current = 0;
    }

    updateCarousel();

});

document.getElementById("prev").addEventListener("click", () => {

    current--;

    if(current < 0){
        current = projects.length - 1;
    }

    updateCarousel();

});

updateCarousel();


const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        reason: form.reason.value
    };

    try {
        const response = await fetch("https://iyg999a-portfolio.onrender.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert(result.message);
        }

    } catch (error) {
        console.error(error);
        alert("Failed to send message.");
    }
});