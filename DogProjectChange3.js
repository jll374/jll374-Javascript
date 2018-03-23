
//brings up answer for zodiac signs (ex.function capricorn)
function updateHoriscope (signName, breeds, audioName, imageName) {
  var elGreeting = document.getElementById('greeting');
      elGreeting.innerHTML = signName; 
  var elBreeds = document.getElementById('dogBreeds');    
      elBreeds.innerHTML = 'Breeds: ' + breeds;
  var sound = new Audio('sounds/' + audioName); 
      sound.play();
  var elImage = document.getElementById('image');
      elImage.innerHTML = '<img src="images/' + imageName + '"/>';
  var puppyWrapper = document.getElementById('puppyWrapper');     
      puppyWrapper.style.display = "block";
}

function capricorn (){
  updateHoriscope(
      'Capricorn', 
      'Pomeranian,Yorkshire Terrier, Maltese',
      'dog1.wav',
      'capricorn.jpg'
      );   
} 

function  aquarius(){
  updateHoriscope(
    'Aquarius', 
    'German Shepherd, Rottweiler, Great Dane',
    'dog2.wav',
    'aquarius.jpg'
    );  
}

function  pisces(){
  updateHoriscope(
  'Pisces', 
  'Beagle, Dachshund, Cavalier King Charles Spaniel',
  'dog3.wav',
  'pisces.jpg'
  ); 
}

function aries() {
  updateHoriscope(
  'Aries', 
  'Maltese, Basset Hound, Norwich Terrier',
  'dog4.wav',
  'aries.jpg'
  ); 
}

function taurus() {
  updateHoriscope(
  'Taurus', 
  'Blue Heeler, Australian Shepherd, Border Collie',
  'dog5.wav',
  'taurus.jpg'
  ); 
}

function gemini() {
  updateHoriscope(
  'Gemini', 
  'Bulldog, Pit Bull, Boxer',
  'dog6.wav',
  'gemini.jpg'
  ); 
}

function cancer() {
  updateHoriscope(
  'Cancer', 
  'Boston Terrier, French Bulldog, Corgi',
  'dog7.wav',
  'cancer.jpg'
  ); 
}

function leo() {
  updateHoriscope(
  'Leo', 
  'Labrador, Golden Retriever, Pointer',
  'dog8.wav',
  'leo.jpg'
  ); 
}

function virgo() {
  updateHoriscope(
  'Virgo', 
  'Husky, Alaskan Malamute, Bernese Mountain Dog',
  'dog9.wav',
  'virgo.jpg'
  ); 
}

function libra() {
  updateHoriscope(
  'Libra', 
  'Spitz, Akita, French Spaniel',
  'dog10.wav',
  'libra.jpg'
  ); 
}

function scorpio() {
  updateHoriscope(
  'Scorpio', 
  'Pug, Chow Chow, Chihuahua',
  'dog11.wav',
  'scorpio.jpg'
  ); 
}

function sagittarius() {
  updateHoriscope(
  'Sagittarius', 
  'Shih Tzu, Poodle, Pekingese',
  'dog12.wav',
  'sagittarius.jpg'
  ); 
}
//brings up answer to zodiac sign using birthdate
function getZodiacSign() {
  var day = document.getElementById('dateInput').value; 
  var month = document.getElementById('monthInput').value;
  var puppyWrapper = document.getElementById('puppyWrapper');
  
  if (month !== "Month"  && day !== "Day") {

    if((month == 1 && day <= 20) || (month == 12 && day >=22)) { 
      capricorn()
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) { 
      aquarius()
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) { 
      pisces()
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) { 
      aries()
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) { 
      taurus()
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) { 
      gemini()
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) { 
      cancer()
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) { 
      leo()
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) { 
      virgo()
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) { 
      libra()
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) { 
      scorpio()
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) { 
      sagittarius()
    } 
  } else {
    alert("pick a date");
 }
  puppyWrapper.style.display = "block";
}

//resets the form
function resetFunction() {
    document.getElementById("zodiacForm").reset();
    var puppyWrapper = document.getElementById('puppyWrapper');    
        puppyWrapper.style.display = "none";
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


