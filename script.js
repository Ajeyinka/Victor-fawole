
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

  




const magnetoElements = document.querySelectorAll('.name');

const activateMagneto = (event) => {
    const magneto = event.currentTarget;
    const magnetoText = magneto.querySelector('h3');
    let boundBox = magneto.getBoundingClientRect();
    let magnetoStrength = 20;
    let magnetoTextStrength = 40;
    const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
    const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    });

    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    });
}

const resetMagneto = (event) => {
    const magneto = event.currentTarget;
    const magnetoText = magneto.querySelector('h3');

    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });

    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    });
}

magnetoElements.forEach((magneto) => {
    magneto.addEventListener('mousemove', activateMagneto);
    magneto.addEventListener('mouseleave', resetMagneto);
});



/* const secs = document.querySelectorAll('.section')


secs.forEach((sec,index) =>{

    let nans = sec.querySelectorAll('.nan')

    let tL = gsap.timeline({
        scrollTrigger:{
            trigger:sec,
            start:"top 40%",
            end: "bottom 100%",
            markers:false,
            scrub:true,
            toggleAction:"play pause reverse reset"
        
        }
    });
    
    tL.from(nans ,{
        opacity:0,
        stagger:{each:0.2},
        y:"6rem",
    
        duration:1,
    }) 
    
})






let loadTl = gsap.timeline();
loadTl.from('.txt',{
    opacity:0,
    stagger:{each:0.2},
    y:"6rem",
    duration:1,
}
)
loadTl.from('.heroes',{
    opacity:0,
    scale:0.8,
    duration:1
})
 */


    let valueDisplays = document.querySelectorAll (".num");
    let interval = 4000;
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });







    const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navLinks = document.getElementsByClassName('navbar-links')[0]
        const barOne = document.getElementsByClassName('bar one')[0]
        const barTwo = document.getElementsByClassName('bar two')[0]
        const barThree = document.getElementsByClassName('bar three')[0]
        
        toggleButton.addEventListener('click',() =>{
            navLinks.classList.toggle('active')
            barOne.classList.toggle('active')
            barTwo.classList.toggle('active')
            barThree.classList.toggle('active')
        });


        
    const activePage = window.location.pathname;
const activeNav = document.querySelectorAll('.ava').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('navactive');
      
    }
  })
