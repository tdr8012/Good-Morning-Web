const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartContainer = document.getElementById("heart-container");

noBtn.addEventListener('mouseenter', buttonMovesWhenHover);
noBtn.addEventListener('touchstart', buttonMovesWhenHover);

function buttonMovesWhenHover() {
    const x = Math.floor(Math.random() * (window.innerWidth - 200));
    const y = Math.floor(Math.random() * (window.innerHeight - 80));

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        createHeart();
    }

    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = '../SecondPage/secondPage.html';
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
