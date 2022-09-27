
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById("Hometown").onclick = function(){
  location.href="./hometown.html";
};

document.getElementById("Food").onclick = function(){
  location.href="./food.html";
};
document.getElementById("Tourist").onclick = function(){
  location.href="./tourist.html";
};
document.getElementById("back").onclick = function(){
  location.href="./quiz1.html";
};