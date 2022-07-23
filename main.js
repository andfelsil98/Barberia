// SELECTORES !!!!!!!!!!!!
// desktop 
const burgerMenu = document.querySelector(".menu");
const desktopMenu = document.querySelector(".desktop-menu"); //el HTML que aparece o desaparece

// EVENTOS!!!!!!!!!!!!!!!!

//evento 1 va con la funcion "toggleMobileMenu"
burgerMenu.addEventListener("click", toggleMobileMenu);


// FUNCIONES!!!!!!!!!!!!!!!!!


function toggleMobileMenu(){
    // shoppingCartContainer.classList.add("inactive");
    // productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}
