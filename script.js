function updateDateTime() {
    const now = new Date();
    
    // Format date
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('date').innerText = dateString;

    // Format time
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById('clock').innerText = timeString;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();





let lightmode = localStorage.getItem('lightmode-img');
const themeSwitch = document.getElementById('mode-container');

const enableLightmode = () => {
    document.body.classList.add('lightmode-img');
    localStorage.setItem('lightmode-img', 'active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightmode-img');
    localStorage.setItem('lightmode-img', 'null');
};

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode-img');
    lightmode === "active" ? disableLightmode() : enableLightmode();
});

// Initialize theme on page load
if (lightmode === "active") {
    enableLightmode();
}
