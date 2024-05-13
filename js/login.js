let personas = [];

//Primera personas ingresada pero en mas lineas
let persona1 = {
    nombre : "Juan",
     edad: 30 };

//Segunda personas ingresa pero en una linea
let persona2 = {nombre : "Maria", edad: 40 };

personas.push(persona1);
personas.push(persona2);

//convertimos el array a formato JSON
let personasJson = JSON.stringify(personas);

//Guardamos el JSON en el local storage
localStorage.setItem("personas", personasJson);

//Para recuperar el array del local storage
let personasRecuperadas = JSON.parse( localStorage.getItem("personas"));

console.log(typeof(personasRecuperadas));
const llamar = () =>{
    personasRecuperadas.map((personaRecuperada)=>{
        const{nombre, edad} = personaRecuperada;
        console.log(nombre);
        console.log(edad);
    })
    
}
llamar();
//Ahora puedes utiizar el array recuperado

// const operador = (...personaRecuperada) =>{
//     console.log(object);
// }