const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Looping through images */
for ( let i = 1; i <=5 ; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', "images/pic1.jpg" + i + ".jpg");
thumbBar.appendChild(newImage);
newImage.addEventListener("click", function(a) {
    displayedImage.src = a.src;
    });
}

/* Wiring up the Darken/Lighten button */


  function darken_lighten () {
    const BtnAttribute = document.getElementsByClassName("button").getAttribute("class");
     if (BtnAttribute === "dark" ){
        btn.setAttribute("class","dark");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = rgba(0,0,0,0.5);
     }
     else {
        btn.setAttribute("class","light");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = rgba(0,0,0,0);

     }     

  }

  btn.addEventListener("click", function() {
    darken_lighten();
  });