function openService(evt, ServiceBlock) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(ServiceBlock).style.display = "block";
  evt.currentTarget.className += " active";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var map;
function initMap() {
  var element = document.getElementById('map');
  var options = {
    center: {lat: 59.9387165, lng: 30.3228587},
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
  };

  var myMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: {lat: 59.9387165, lng: 30.3228587},
    map: myMap
  })
}

function openMap() {
  document.getElementById("openMapForm").style.display = "block";
}

function closeMap() {
  document.getElementById("openMapForm").style.display = "none";
}
