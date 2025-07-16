const cardInput = document.getElementById('cardInput');
const cardHolderInput = document.getElementById('cardHolderInput');
const expiryInput = document.getElementById('expiryInput');
const cardNumberDisplay = document.getElementById('cardNumber');
const cardTypeDisplay = document.getElementById('cardType');
const cardHolderDisplay = document.getElementById('cardHolder');
const expiryDateDisplay = document.getElementById('expiryDate');
const cardDisplay = document.getElementById('cardDisplay');
const bankNameDisplay = document.getElementById('bankName');

// Función para formatear el número de la tarjeta
function formatCardNumber(number) {
    return number.replace(/\s+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
}

// Función para detectar tipo de tarjeta
function detectCardType(number) {
    const firstDigit = number.charAt(0);
    if (firstDigit === '4') {
        return 'Visa';
    } else if (firstDigit === '5') {
        return 'Mastercard';
    } else {
        return 'Desconocida';
    }
}

// Función para detectar banco según el BIN (primeros 6 dígitos)
function detectBank(number) {
    const bin = number.slice(0, 6);
    if (/^5224/.test(bin)) {
        cardDisplay.style.backgroundColor = '#8a0f33'; // Banamex
        return 'Banamex';
    } else if (/^4111/.test(bin)) {
        cardDisplay.style.backgroundColor = '#FF6F00'; // Banorte
        return 'Banorte';
    } else if (/^5237/.test(bin)) {
        cardDisplay.style.backgroundColor = '#0047BA'; // BBVA
        return 'BBVA';
    } else if (/^5289/.test(bin)) {
        cardDisplay.style.backgroundColor = '#D81B60'; // Santander
        return 'Santander';
    } else {
        cardDisplay.style.backgroundColor = '#333'; // Desconocido
        return 'Banco Desconocido';
    }
}

// Evento para actualizar el número de la tarjeta y el tipo
cardInput.addEventListener('input', () => {
    const cardNumber = cardInput.value.replace(/\D/g, ''); // Elimina caracteres no numéricos
    cardNumberDisplay.textContent = formatCardNumber(cardNumber); // Muestra el número formateado
    
    const cardType = detectCardType(cardNumber);
    cardTypeDisplay.textContent = cardType;
    
    const bankName = detectBank(cardNumber);
    bankNameDisplay.textContent = bankName;
    
    // Si la entrada está vacía, vuelve al valor por defecto
    if (cardNumber === '') {
        cardNumberDisplay.textContent = '#### #### #### ####';
        cardTypeDisplay.textContent = 'Visa/Mastercard';
        bankNameDisplay.textContent = 'Banco';
        cardDisplay.style.backgroundColor = '#333';
    }
});

// Evento para actualizar el nombre del titular
cardHolderInput.addEventListener('input', () => {
    cardHolderDisplay.textContent = cardHolderInput.value || 'Nombre del Titular';
});

// Evento para actualizar la fecha de vencimiento
expiryInput.addEventListener('input', () => {
    expiryDateDisplay.textContent = expiryInput.value || 'MM/AA';
});