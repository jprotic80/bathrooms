/*--------------------- ANIMACIJA MAIN ---------------------*/

const image1 = document.querySelector(".slide-1");
const image2 = document.querySelector(".slide-2");
const image3 = document.querySelector(".slide-3");

let order = 1;
let easing = "easeInQuad";
function slideF() {
  anime({
    targets: image1,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: image2,
    opacity: 1,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: image3,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  order = 2;
}
function slideS() {
  anime({
    targets: image1,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: image2,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: image3,
    opacity: 1,
    duration: 3000,
    easing: easing,
  });
  order = 3;
}
function slideT() {
  anime({
    targets: image1,
    opacity: 1,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: image2,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  anime({
    targets: image3,
    opacity: 0,
    duration: 3000,
    easing: easing,
  });
  order = 1;
}

setInterval(() => {
  if (order === 1) {
    slideF();
  } else if (order === 2) {
    slideS();
  } else {
    slideT();
  }
}, 6500);

/*--------------------- FETCH DIZAJNERA ---------------------*/

function getData() {
  //Get API
  fetch("https://randomuser.me/api/?results=49")
    .then((res) => res.json())
    .then((data) => {
      let author = data.results;

      //Get Data Value
      let output = "<h2><center>M&L team of designers</center></h2>";

      //Get Data Loop Through
      author.forEach(function (lists) {
        output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                        </ul>
                    </div>
                </div> `;
      });

      //Show On Our Screen All Data
      document.querySelector(".main-third").innerHTML = output;
    });
}

getData();

/*--------------------- ANIMACIJA DIZAJNERA ---------------------*/

const mainThird = document.querySelector(".main-third");
const show = document.querySelector(".show");
document.getElementById("myBtn").addEventListener("click", () => {
  mainThird.classList.toggle("show");
});

/*--------------------- ANIMACIJA NAVIGACIJE ---------------------*/

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

/*--------------------- ANIMACIJA DUGMETA ---------------------*/

const button = document.querySelector(".button");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const clicked = document.querySelector(".clicked");

button.addEventListener("click", () => {
  btn1.classList.toggle("clicked");
  btn2.classList.toggle("clicked");
});
