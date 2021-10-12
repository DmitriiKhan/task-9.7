const trafficLightEl = document.getElementById('trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);


/*модифицированный светофор*/

const colors = ['green','yellow','red'];
let curElemActive = -1;
const trafficLightEl2 = document.getElementById('trafficLight2');
const trafficLightEl3 = document.getElementById('trafficLight3');
const trafficLightEl4 = document.getElementById('trafficLight4');

trafficLightEl2.addEventListener('click', changeColor);
trafficLightEl3.addEventListener('click', changeColor);
trafficLightEl4.addEventListener('click', changeColor);
function changeColor(){
    switch(curElemActive){
        case 0:
            curElemActive = 1;
            trafficLightEl2.style.background = ('black');
            trafficLightEl3.style.background = (colors[1]);
            break;
        case 1:
            curElemActive = 2;
            trafficLightEl3.style.background = ('black');
            trafficLightEl4.style.background = (colors[2]);
            break;
        case 2:
            curElemActive = 0;
            trafficLightEl4.style.background = ('black');
            trafficLightEl2.style.background = (colors[0]);
            break;
        default:
            curElemActive = 0;
            trafficLightEl3.style.background = ('black');
            trafficLightEl4.style.background = ('black');
            trafficLightEl2.style.background = (colors[0]);
            break;
    }
}