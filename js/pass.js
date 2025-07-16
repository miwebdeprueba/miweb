function generarPassword(){
    const length = 16; // longitud de la contraseña
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*()_+-/=";
    let password = "";
    for(let i = 0, n = charset.length; i < length; ++i){
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("passwordDisplay").textContent = password;
}