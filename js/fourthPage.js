window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    setTimeout(() => {
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "../html/thirdPage.html";
        }, 1000);
    }, 3000);
});
