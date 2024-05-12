// Select all anchor tags with the navlinks class
window.onload = function () {
    const navLinks = document.querySelectorAll("a.navlinks");
    
    // Add event listeners for hover
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.borderBottom = "2px solid white";
            link.style.transition = "border-bottom 0.3s ease"; // Updated transition duration
        });
        
        link.addEventListener("mouseleave", () => {
            link.style.borderBottom = "none";
        });
    });
    
    const menuButton = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-nav");

    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("is-active");
        mobileMenu.classList.toggle("is-active");
    });
}

