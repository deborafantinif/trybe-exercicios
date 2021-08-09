//título principal
document.querySelector("#header-container").style.background = "#42B16A";

//background box
let boxEmergency = document.querySelectorAll(".emergency-tasks div");

for (let i = 0; i < boxEmergency.length; i += 1) {
    boxEmergency[i].style.backgroundColor = "#FC9F83";
}

let boxNoEmergency = document.querySelectorAll(".no-emergency-tasks div");

for (let indice = 0; indice < boxNoEmergency.length; indice += 1) {
    boxNoEmergency[indice].style.backgroundColor = "#F9DB5E";
}

//títulossecundários
let titleEmergency = document.querySelectorAll(".emergency-tasks h3");

for (let i = 0; i < titleEmergency.length; i += 1) {
    titleEmergency[i].style.backgroundColor = "#AC7EF3";
}

let titleNoEmergency = document.querySelectorAll(".no-emergency-tasks h3");

for (let ind = 0; ind < titleNoEmergency.length; ind += 1) {
    titleNoEmergency[ind].style.backgroundColor = "black";
}


document.getElementById("footer-container").style.backgroundColor = "#083534";

