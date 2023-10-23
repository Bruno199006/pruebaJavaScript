
// constructor//

function Persona(nombre, edad, altura, dineroGastado){
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    this.dineroGastado = dineroGastado;
}

const personasEnlaDiscoteca = [];

/// funcion creada para ingresar nuevas personas al array ///

function ingresarPersona(nombre, edad, altura, dineroGastado){

    const nuevaPersona = new Persona(nombre , edad, altura, dineroGastado);

    personasEnlaDiscoteca.push(nuevaPersona);
}
///funcion creada para habilitar al usuario a ingresar datos al array///
function pedirDatosAlUsuario(){
    while(true){

     const nombre = prompt("ingrese su nombre para el registro (DEJE EN BLANCO PARA SALIR)")

     if(nombre === ""){
        break;
     }
     const edad = Number(prompt("Ingrese su edad para el registro"))

     if(isNaN(edad)){
        alert("la entrada de edad no es valida,por favor intentalo de nuevo")
        continue;
     }
     const altura = Number(prompt("ingrese su estatura para el registro"))
     if(isNaN(altura)){
        alert("la entrada de estatura no es valida,por favor intentar de nuevo")
        continue;
     }
     const dineroGastado = Number(prompt("Ingrese el monto abonado en la discoteca"))
     if(isNaN(dineroGastado)){
        alert("la entrada del dinero abonado no es correcta,por favor intentelo de nuevo")
        continue;
     }
     ingresarPersona(nombre, edad, altura, dineroGastado);

    console.log("nueva persona agregada al array")
    }
   
}
pedirDatosAlUsuario();


/// variable creada con reduce para calcular el gasto total de cada persona en la discoteca ///

const sumaDineroGastado = personasEnlaDiscoteca.reduce((total, persona) => total + persona.dineroGastado, 0);

console.log("El dinero total gastado por las personas en la discoteca es de : ", sumaDineroGastado);

console.log(personasEnlaDiscoteca);