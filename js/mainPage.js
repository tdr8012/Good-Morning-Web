const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartContainer = document.getElementById("heart-container");

let originalX = noBtn.offsetLeft;
let originalY = noBtn.offsetTop;

noBtn.addEventListener('mouseenter', buttonMovesWhenHover);
noBtn.addEventListener('touchstart', buttonMovesWhenHover);

function buttonMovesWhenHover() {
    const maxOffset = 150;

    const offsetX = Math.floor((Math.random() * 7 - 1) * maxOffset);
    const offsetY = Math.floor((Math.random() * 7 - 1) * maxOffset);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${originalX + offsetX}px`;
    noBtn.style.top = `${originalY + offsetY}px`;
}

yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        createHeart();
    }

    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = '/Good-Morning-Web/html/secondPage.html';
    }, 1000);
});

function createHeart() {
    const rect = yesBtn.getBoundingClientRect();

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    heart.style.position = "absolute";
    heart.style.left = `${rect.left + rect.width / 2}px`;
    heart.style.top = `${rect.top}px`;

    const randomX = (Math.random() * 2) - 1;
    heart.style.setProperty("--random-x", randomX);

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}
