const changeMindBtn = document.getElementById("changeMindBtn");

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


changeMindBtn.addEventListener('click', function() {
    
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = '/Good-Morning-Web/html/fourthPage.html';
    }, 1000);
});
