let acceso=prompt("Cual es el codigo secreto?")
if (acceso==="nahuel"){
    alert("Bienvenido a la calculadora de Nahuel")
    let numeroUno=parseFloat(prompt("Decime un numero"));
    let numeroDos=parseFloat(prompt("Decime otro numero"));
    let sumaNumeros= numeroUno+numeroDos
    alert("El resultado de tu cuenta fue: "+sumaNumeros);
    
}
else {
    alert("Contrasenia Incorrecta. Aqui te va una pista.");
    alert("Si desea salir, y probar nuevamente la contrasenia, escribir ESC");
    let nombre = prompt("Ingresa tu nombre");
    while(nombre!="ESC"){
        alert(nombre+": Quien creo este loop?")
        break
        }

    }


