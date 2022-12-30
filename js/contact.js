var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
forEach(hamburgers, function(hamburger) {
hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
}, false);
});
}

const hamburger = document.querySelector(".hamburger");
const map = document.querySelector(".map");
const links = document.querySelector(".links");
const html = document.querySelector("html");
const contact = document.querySelector(".contact");
const socials = document.querySelector(".socials");
const footer = document.querySelector(".footer-distributed");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    map.classList.toggle("active")
    links.classList.toggle("active")
    html.classList.toggle("active")
    footer.classList.toggle("active")
    contact.classList.toggle("active")
    socials.classList.toggle("active")
  })
