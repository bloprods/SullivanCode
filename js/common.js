/*
Javascript file for git.html web page.
*/

function openNav() {
    /*
    Function to open side bar if it's close.
    */
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("sidebar").style.borderRightWidth = "5px";
    document.getElementById("container").style.marginLeft = "360px";
    document.getElementById("title").style.marginLeft = "360px";
    document.getElementById("mainFooter").style.marginLeft = "350px";
    document.getElementById("mainHeader").style.marginLeft = "350px";
    document.getElementById("navigationMenu").style.marginLeft = "350px";
}

function closeNav() {
    /*
    Function to close side bar if it's open.
    */
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("sidebar").style.borderRightWidth = "0px";
    document.getElementById("container").style.marginLeft= "10px";
    document.getElementById("title").style.marginLeft= "10px";
    document.getElementById("mainFooter").style.marginLeft = "0px";
    document.getElementById("mainHeader").style.marginLeft = "0px";
    document.getElementById("navigationMenu").style.marginLeft = "0px";
}

function submit_form() {
    var error = false;
    
    if (!document.getElementById("name").value) {
        alert("ERROR: No se ha introducido el nombre.")
        error = true;
    } else if (!document.getElementById("apell").value) {
        alert("ERROR: No se han introducido los apellidos.")
        error = true;
    }else if (!document.getElementById("dni").value) {
        alert("ERROR: No se ha introducido el DNI.")
        error = true;
    }else if (!document.getElementById("fn").value) {
        alert("ERROR: No se ha introducido la fecha de nacimiento.")
        error = true;
    }else if (!document.getElementById("mail").value) {
        alert("ERROR: No se ha introducido el email.")
        error = true;
    }else if (!document.getElementById("cod").value) {
        alert("ERROR: No se ha introducido el código postal.")
        error = true;
    }

    if (!error) {
        alert("Se ha enviado correctamente el formulario");
    } 
    
}

