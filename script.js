console.log("JS running")

let scrollBtn = document.querySelector('.scroll-button a');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 250) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})