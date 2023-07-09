const range = () =>{
    let range = document.getElementById("range").value
    let rangeResult = document.getElementById("rangeRes")
    rangeResult.innerHTML=`${range}`
}
let generate = ()=>{
    let range = document.getElementById("range").value
    let carac= document.getElementById("especial").checked
    let min = document.getElementById("min").checked
    let numbers = document.getElementById("numbers").checked
    let caracteres= "ABCDEFGHIJKLMNÑOPQRSTWXYZ"
    let contraseña = ""
    if(range >= 6){
        if(min === true){
            caracteres += caracteres.toLowerCase()
        }
        if(carac === true){
            caracteres += "!#$%&//()=?¡*]}{[_.-:,;¿\^`@-_|°¬"
        }
        if(numbers === true){
            caracteres+= 1234567890
        }
        for (let i = 0; i <= range; i++){
            contraseña+= caracteres.charAt(Math.random() * caracteres.length);
        }
        document.getElementById("return").innerHTML =`Su contraseña de ${range} caracteres es la siguiente: 
        <span class="password">${contraseña}</span>`
    }
    else{
        document.getElementById("return").innerHTML =`Ingrese un numero mayor a 6`
    }
}
