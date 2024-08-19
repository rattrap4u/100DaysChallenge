const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "HTML"
    }, 0);
    setTimeout(() => {
        text.textContent = "Tailwind CSS"
    }, 4000);
    setTimeout(() => {
        text.textContent = "JavaScript"
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);