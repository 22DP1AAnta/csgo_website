const themeSwitch = document.getElementById('theme-switch');

// Check the user's preference from local storage (if available)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.className = savedTheme;
    themeSwitch.checked = savedTheme === 'dark-theme';
}

// Handle theme switch change
themeSwitch.addEventListener('change', function () {
    const theme = this.checked ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
    localStorage.setItem('theme', theme);
});


// Get the elements with the quiz theme classes
const quizSkins = document.querySelector('.quiz_skins');
const quizPro = document.querySelector('.quiz_pro');
const quizFacts = document.querySelector('.quiz_facts');

// Function to change the quiz theme
function changeTheme(theme) {
    // Replace this code with the logic to change the theme based on the selected option
    // For example, you can set a class on the body element to apply styles for the selected theme
    document.body.className = theme.toLowerCase(); // This sets the class of the body element

    // You can add additional logic here to load specific CSS files or perform other actions
}

// Add click event listeners to the elements
quizSkins.addEventListener('click', () => {
    changeTheme('SKINS');
});

quizPro.addEventListener('click', () => {
    changeTheme('PRO');
});

quizFacts.addEventListener('click', () => {
    changeTheme('FACTS');
});