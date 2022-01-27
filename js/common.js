/*
Javascript file for git.html web page.
*/

function openNav() {
    /*
    Function to open side bar if it's close.
    */
    document.getElementById("openbtn").style.visibility = "hidden";
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

function submit() {
    alert("Se ha enviado correctamente el formulario");
}