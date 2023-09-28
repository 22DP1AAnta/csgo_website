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
