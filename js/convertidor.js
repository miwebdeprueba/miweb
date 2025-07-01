
function convertir(){
let numberInput = document.getElementById('numberInput').value;
let fromBase = parseInt(document.getElementById('fromBase').value);
let toBase = parseInt(document.getElementById('toBase').value);
// convertir numeros a decimal 
let decimalNumber = parseInt(numberInput, fromBase);
// convertir numero decimal a la base del destino 
let result = decimalNumber.toString(toBase).toUpperCase();
// Mostrar el resultado 
document.getElementById('result').innerHTML= result;
}