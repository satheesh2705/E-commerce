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

function showProfileList(){
    document.getElementById("ProfileList").style.width="250px";
}

function closeProfileList(){
    document.getElementById("ProfileList").style.width="0";
}

function handleFavorite(){
   document.getElementById("favoriteIcon").style.color="red"
   
}

// for flash sale 

const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
// const mseconds=document.querySelector("#mseconds");

const currentYear=new Date().getFullYear();
const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);

function UpdateTime(){
  const currentDate=new Date();
  const diff=newYear-currentDate;
  const d=Math.floor(diff/1000/60/60/1000);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
//   const ms=Math.floor(diff%1000);

  days.innerHTML=d<10?"0"+d:d;
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;
//   mseconds.innerHTML=ms<10?"0"+ms:ms;
}
setInterval(UpdateTime,1000);


// =====================================================================
// for image slider -----------------------------------------------------
// ===================================================================




// Access the Images
let slideImages = document.querySelectorAll('img');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
if(counter >= slideImages.length-1){
    counter = 0;
}
else{
    counter++;
}
slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
if(counter == 0){
    counter = slideImages.length-1;
}
else{
    counter--;
}
slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
indicators();
}

// Auto slideing
function autoSliding(){
    deletInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage){
    
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators();
}
