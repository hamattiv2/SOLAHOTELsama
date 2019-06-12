const slideshow = [
  './img/slide1.jpg',
  './img/slide2.jpg',
  './img/slide3.jpg',
  './img/slide4.jpg',
  './img/slide5.jpg'
];

let fade = 1;
let slideNo = 0;

function slider(){
  if (fade === 0) {
    document.getElementById('slide2').src = slideshow[slideNo];
    document.getElementById('slide2').className = 'fadein';
    document.getElementById('slide1').className = 'fadeout';
  } else {
    document.getElementById('slide1').src = slideshow[slideNo];
    document.getElementById('slide1').className = 'fadein';
    document.getElementById('slide2').className = 'fadeout';
  }

  if (fade === 0) {
    fade = 1;
  } else {
    fade = 0;
  }

  if (slideNo < 4) {
    slideNo++;
  } else {
    slideNo = 0;
  }

  setTimeout(slider,4000); 
}

slider()