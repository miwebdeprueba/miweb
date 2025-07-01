const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing)

function startDrawing(e){
    isDrawing = true;
    draw(e); // punto inicial del dibujo 
}

function draw(e){
    if(!isDrawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}
function stopDrawing(){
    isDrawing = false;
    ctx.beginPath();
}
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click',() => {
ctx.clearRect(0 , 0, canvas.width, canvas.height);
});
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
const dataUrl = canvas.toDataURL('image/png');
const link = document.createElement('a');
link.href = dataUrl;
link.download = 'mi_dibujo.png';
link.click();
});