document.addEventListener("DOMContentLoaded",(event)=>{
    document.getElementById("submit").addEventListener('click',(event)=>{

            event.preventDefault();
            ajaxEnvoiForm();

    })




})

// #######################################################

function ajaxEnvoiForm(){

    if (window.XMLHttpRequest) request = new XMLHttpRequest();

    let input = document.getElementById("prenom");
    let prenom = input.value;
    let parameters = "prenom=" + prenom + "&mode=envoi";

    request.open("POST", "ajax5.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = function() {

        if (request.readyState ==4 && request.status == 200) {
                let objet = JSON.parse(request.responseText);
                ajax();


        }

    }

    request.send(parameters);
}

// #######################################################
// Fonction ajax qui permet d'afficher toute la ligne de l'employe insere dans la table 'employes'

function ajax(){

    if (window.XMLHttpRequest) request = new XMLHttpRequest();
    request.open("POST", "ajax5.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = () => {
        if (request.readyState ==4 && request.status == 200){

            let objet = JSON.parse(request.responseText);
            document.getElementById("resultat").innerHTML = objet.resultat;
        }

        }


    request.send();
}