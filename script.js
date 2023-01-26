
gsap.to("h4",{
  text: "Front End",
  color: "#fff",
  repeat: 7,
  repeatDelay: .7,
  ease: 'InShine',
  duration: 3,
  yoyo: true,
  delay: 2
})

const text = document.querySelector('.name');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i< splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer  = setInterval(onTick, 400);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if (char=== splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}



gsap.from('.small-intro', { duration: 5, delay: 2, x: '60vw', ease: 'back.in', opacity: 0,})
gsap.from('#btn-tour', { duration: 3, delay: 7, y: '50vw', ease: 'circ', opacity: 0,})


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 200,
        "height": 200
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.2,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#31E1F7",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 10,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "in",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 10,
        "duration": 2,
        "opacity": 5,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 6
      },
      "remove": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

