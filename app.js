let generate = ()=>{
    let range = document.getElementById("range").value
    let carac= document.getElementById("especial").checked
    let min = document.getElementById("min").checked
    let numbers = document.getElementById("numbers").checked
    let caracteres= "ABCDEFGHIJKLMNOPQRSTWXYZ"
    let contraseña = ""
    if(min === true){
        caracteres += caracteres.toLowerCase()
    }
    if(carac === true){
        caracteres += "!#$%&//()=?¡*]}{[_.-:,;"
    }
    if(numbers === true){
        caracteres+= 1234567890
    }
    for (let i = 0; i <= range; i++){
        contraseña+= caracteres.charAt(Math.random() * caracteres.length);
    }
    document.getElementById("return").innerHTML =`Su contraseña de ${range} caracteres es la siguiente: ${contraseña}`
}
