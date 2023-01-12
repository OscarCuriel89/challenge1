function encriptar(){
    var texto= document.getElementById("input-texto").value.toLowerCase();
    
    var txtEncriptar= texto.replace(/e/igm,"enter");
    var txtEncriptar= txtEncriptar.replace(/o/igm,"ober");
    var txtEncriptar= txtEncriptar.replace(/i/igm,"imes");
    var txtEncriptar= txtEncriptar.replace(/a/igm,"ai");
    var txtEncriptar= txtEncriptar.replace(/u/igm,"ufat");

    document.getElementById("mono").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtEncriptar;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto= document.getElementById("input-texto").value.toLowerCase();
    
    var txtEncriptar= texto.replace(/enter/igm,"e");
    var txtEncriptar= txtEncriptar.replace(/ober/igm,"o");
    var txtEncriptar= txtEncriptar.replace(/imes/igm,"i");
    var txtEncriptar= txtEncriptar.replace(/ai/igm,"a");
    var txtEncriptar= txtEncriptar.replace(/ufat/igm,"u");

    document.getElementById("mono").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtEncriptar;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var content = document.getElementById("texto2");
    
    content.select();
    document.execCommand('copy');

    
}