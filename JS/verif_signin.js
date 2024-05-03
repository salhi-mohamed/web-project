function verif() {
    if (document.creation.fullname.value == "") {
        alert("vous devez saisir votre nom et prenom");
    }
    if (document.creation.email.value == "") {
        alert("vous devez saisir votre email");
    }
    if (isNaN(document.creation.Tel.value)) {
        alert("vous devez saisir votre numero de telephone ");
    }
    if (document.creation.Tel.value.length != 8) {
        alert("vous devez respecter la taille d'un numero de telephone (8 chiffres)");
    }
    
}
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})