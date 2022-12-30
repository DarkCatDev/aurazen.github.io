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
const main = document.querySelector(".main");
const links = document.querySelector(".links");
const html = document.querySelector("html");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    main.classList.toggle("active")
    links.classList.toggle("active")
    html.classList.toggle("active")
})


var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
var card1 = document.querySelector(".card1");
var playing = false;

card1.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card1,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
var card2 = document.querySelector(".card2");
var playing = false;

card2.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card2,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
var card3 = document.querySelector(".card3");
var playing = false;

card3.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card3,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});

scroll.on('scroll', (args) => {
  // Get all current elements : args.currentElements
  if(typeof args.currentElements['test'] === 'object') {
      let progress = args.currentElements['test'].progress;
      console.log(progress);
      // ouput log example: 0.34
      // gsap example : myGsapAnimation.progress(progress);
  }
});