document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("change-theme")
    const currentTheme = localStorage.getItem("theme") || "light"
    document.body.className = currentTheme

    themeButton.addEventListener("click", () => {
        const newTheme = document.body.className === "light" ? "dark" : "light"
        document.body.className = newTheme
        localStorage.setItem("theme", newTheme)
        const buttonChangeTheme = document.getElementById("change-theme")
        newTheme === "light" ? buttonChangeTheme.innerText = "Dark Mode" : buttonChangeTheme.innerText = "Light Mode"
    })
})