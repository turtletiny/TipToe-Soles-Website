function onPageLoad () {
        const button = document.querySelector('#menu-button')
        const menu = document.querySelector('#main')
        button.addEventListener("click", function() {
        
        if( menu.classList.contains("open") ) {
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
    })
}
window.addEventListener("load", onPageLoad )

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const mainNav = document.getElementById("main");

    menuButton.addEventListener("click", function() {
        mainNav.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const mainNav = document.getElementById("main");

    menuButton.addEventListener("click", function() {
                mainNav.classList.toggle("open");
    });
});
