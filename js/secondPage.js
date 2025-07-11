const changeMindBtn = document.getElementById("changeMindBtn");

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


changeMindBtn.addEventListener('click', function() {
    event.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = '../html/fourthPage.html';
    }, 1000);
});
