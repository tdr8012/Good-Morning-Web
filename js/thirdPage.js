window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  setTimeout(() => {
    const p = document.getElementById("p1");
    p.textContent = "But wait, my love 💖 don’t go just yet—I still have a surprise for you 💝";

    setTimeout(() => {
      window.location.href = "../html/fifthPage.html";
    }, 3000);

  }, 3000);
});
