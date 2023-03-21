const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function islampBroken (){
    return lamp.src.indexOf ('quebrada') >-1
}

function lampOn ()  {
    if (!islampBroken() ){

        lamp.src = './imagens/ligada.jpg';
    } 
}

function lampOff () {
    if (!islampBroken() ){
        lamp.src = './imagens/desligada.jpg';
    }
        
}

function lampBroken () {
    lamp.src = './imagens/quebrada.jpg';
}

turnOff.addEventListener ('click', lampOff);
turnOn.addEventListener ('click' ,lampOn);
lamp.addEventListener ('mouseover',lampOn);
lamp.addEventListener ('mouseleave',lampOff);
lamp.addEventListener ('dblclick', lampBroken);