function openCatogories() {
    document.getElementById("CatogoriesList").style.width = "250px";
}

function closeCatogories() {
    document.getElementById("CatogoriesList").style.width = "0";
    
}


function openMensList() {
    console.log("hello");
    document.getElementById("openMensList").style.width="250px";
    document.getElementById("CatogoriesList").style.width = "0px";

}

function closeMensList() {
    document.getElementById("openMensList").style.width="0"
    document.getElementById("CatogoriesList").style.width = "250px";

}

function openWomensList(){
    console.log("hello");
    document.getElementById("openWomensList").style.width="250px";
    document.getElementById("CatogoriesList").style.width = "0px";
}

function closeWomensList(){
    document.getElementById("openWomensList").style.width="0"
    document.getElementById("CatogoriesList").style.width = "250px";
}