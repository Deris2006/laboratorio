let nombre = prompt("Ingrese su nombre:")
let palabra = prompt("Ingrese una palabra:")
if (nombre.toLowerCase().includes(palabra.toLowerCase())) {
    console.log("La palabra está incluida en el nombre.")
} else {
    console.log("La palabra no está incluida en el nombre.")
}