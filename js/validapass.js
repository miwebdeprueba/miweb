function validaPassword() {
    const password = document.getElementById('passwordInput').value;
    const messageElement = document.getElementById('message');
    const validations = [
        { regex: /.{8,}/, message: "Debe tener al menos 8 caracteres." },
        { regex: /[a-z]/, message: "Debe contener al menos una letra minúscula." },
        { regex: /[A-Z]/, message: "Debe contener al menos una letra mayuscula." },
        { regex: /[0-9]/, message: "Debe contener al menos un numero." },
        { regex: /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/, message: "Debe contener al menos un carácter especial." }
    ];

    const errors = validations.filter(validation => !validation.regex.test(password));
    if (errors.length === 0) {
        messageElement.textContent = "El password es seguro.";
        messageElement.className = "message success";
    } else {
        messageElement.innerHTML = "El password no es seguro por las siguientes razones:<br>" +
            errors.map(error => "- " + error.message).join("<br>");
        messageElement.className = "message error";
    }
}