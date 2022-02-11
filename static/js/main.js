const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function (){
  document.querySelector('.sidebar').classList.toggle('active');
  document.querySelector('.toggle-btn').classList.toggle('active');
  document.querySelector('.content-sections').classList.toggle('active');

  
});



const imgEffect = document.getElementById('img--1');
const imgEffect2 = document.getElementById('img--2'); 
const imgEffect3 = document.getElementById('img--3');  
const imgEffect4 = document.getElementById('img--4'); 

const animation = (entry, observer) => {

  entry.forEach((enter) => {
    if(enter.isIntersecting){
        enter.target.classList.add('visible');
        
        
    }
  });

};

let observer = new IntersectionObserver(animation, {
  root: null, 
  rootMargin: ' -300px 100px',
  threshold: 1.0
  
   
});
observer.observe(imgEffect);
observer.observe(imgEffect2);
observer.observe(imgEffect3);
observer.observe(imgEffect4);

 



const h2HomeEffect = document.querySelector('.h2-s-home');
const pHomeEffect = document.querySelector('.p--u');
const animation2 = (entry2, observer) => {

  entry2.forEach((enter2) => {
    if(enter2.isIntersecting){
        enter2.target.classList.add('visible');
        
        
    }
  });

};
let observerTxt = new IntersectionObserver(animation2, {
  root: null, 
  rootMargin: ' -100px 100px',
  threshold: 1.0
  
   
});

observerTxt.observe(h2HomeEffect);
observerTxt.observe(pHomeEffect);

butter.init({cancelOnTouch: true});

