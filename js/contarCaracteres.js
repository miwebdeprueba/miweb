function validateText() {
    const textInput = document.getElementById('textInput').value;
    const messageElement = document.getElementById('message');
    const charCountElement = document.getElementById('charCount');
    const charFrequencyElement = document.getElementById('charFrequency');
    
    if (/[\d]/.test(textInput)) {
        messageElement.textContent = "La entrada no debe contener números.";
        messageElement.className = "message error";
        charCountElement.textContent = "";
        charFrequencyElement.textContent = "";
        return;
    }

    messageElement.textContent = "La entrada es válida.";
    messageElement.className = "message";

    // Contar el número de caracteres
    const charCount = textInput.length;
    charCountElement.textContent = `Número de caracteres: ${charCount}`;

    // Contar la frecuencia de cada carácter
    const frequency = {};
    for (let char of textInput) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    let frequencyText = "Frecuencia de caracteres:<br>";
    for (let char in frequency) {
        frequencyText += `${char}: ${frequency[char]}<br>`;
    }
    charFrequencyElement.innerHTML = frequencyText;
}