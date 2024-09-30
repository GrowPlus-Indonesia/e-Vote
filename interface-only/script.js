// Dark Mode Toggle
const modeBtn = document.querySelector("#btn-mode");
let isDarkMode = false;

const setModeStyles = (isDark) => {
    document.documentElement.style.setProperty('--mode', isDark ? '#1F2544' : '#eeeeee');
    document.documentElement.style.setProperty('--mode-line', isDark ? '#474F7A' : '#fefefe');
    document.documentElement.style.setProperty('--mode-reverse', isDark ? '#fefefe' : '#001F3F');
    document.documentElement.style.setProperty('--base', isDark ? '#6439FF' : '#4F75FF');
};

modeBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    setModeStyles(isDarkMode);
});

// Form Reset Button
const resetBtn = document.querySelector("#reset");
const nisInput = document.getElementById("nis");

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();
    nisInput.value = "";
    toggleSubmitButton(false); // Disable submit button after reset
});

// NIS Input Field
nisInput.addEventListener("input", () => {
    const isInputValid = nisInput.value.length > 5;
    toggleSubmitButton(isInputValid);
});

// Submit Button Control
const submitBtn = document.querySelector("button[type=submit]");

const toggleSubmitButton = (isEnabled) => {
    submitBtn.disabled = !isEnabled;
    submitBtn.style.opacity = isEnabled ? 1 : 0.7;
    submitBtn.style.cursor = isEnabled ? "pointer" : "not-allowed";
};

// Initial submit button state
toggleSubmitButton(false);