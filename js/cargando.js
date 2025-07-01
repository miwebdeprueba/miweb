document.addEventListener("DOMContentLoaded", () => {
    let percentage = 0;
    const aguaFill = document.getElementById('aguaFill');
    const percentageText = document.getElementById('percentage');
    const interval = setInterval(() =>{
        if(percentage < 100){
            percentage++;
            aguaFill.style.height = percentage + '%';
            percentageText.textContent = percentage + '%';
        } else {
            clearInterval(interval);
            window.location.href='https://www.iscjoseluischavezg.mx';
        }

    },60);
});