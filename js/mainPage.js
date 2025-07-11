const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartContainer = document.getElementById("heart-container");

let originalX = noBtn.offsetLeft;
let originalY = noBtn.offsetTop;

noBtn.addEventListener('mouseenter', buttonMovesWhenHover);
noBtn.addEventListener('touchstart', buttonMovesWhenHover);

function buttonMovesWhenHover() {
    const maxOffset = 150;

    let offsetX = Math.floor((Math.random() * 3 - 1) * maxOffset);
    let offsetY = Math.floor((Math.random() * 3 - 1) * maxOffset);

    let newX = originalX + offsetX;
    let newY = originalY + offsetY;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (newX < 0) newX = 0;
    if (newX + btnWidth > viewportWidth) newX = viewportWidth - btnWidth;

    if (newY < 0) newY = 0;
    if (newY + btnHeight > viewportHeight) newY = viewportHeight - btnHeight;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
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
