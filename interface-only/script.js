// Dark mode
const modeBtn = document.querySelector("#btn-mode");
let mode = 0;
modeBtn.addEventListener("click", () => {
    document.documentElement.style.setProperty('--mode', mode ? '#1F2544' : '#eeeeee');
    document.documentElement.style.setProperty('--mode-line', mode ? '#474F7A' : '#fefefe');
    document.documentElement.style.setProperty('--mode-reverse', !mode ? '#001F3F' : '#fefefe');
    document.documentElement.style.setProperty('--base', !mode ? '#4F75FF' : '#6439FF');
    mode = !mode;
})