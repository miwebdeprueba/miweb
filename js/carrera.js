function startRace(){
const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');
const trackWidth = document.querySelector('.track').offsetWidth;
const finishLine = trackWidth - 50;
let position1 = 0;
let position2 = 0;
const speed = 20; // puedes cambiar la velocidad
const raceInterval = setInterval(() =>{
position1 += Math.random() * 10;
position2 += Math.random() * 10;

car1.style.left = `${position1}px`;
car2.style.left = `${position2}px`;

if(position1 >= finishLine || position2 >= finishLine){
clearInterval(raceInterval);
if(position1 >= finishLine){
alert("El carro Rojo gano");
}
else{
    alert("El carro naranja Gano");
}
}
}, speed);
};
