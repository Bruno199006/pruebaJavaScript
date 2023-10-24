
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

     const nombre = prompt("ingrese su nombre para el registro (oprima cancelar para salir)")

     if(nombre === null){
        break;
     }

     const edadInput = prompt("Ingrese su edad para el registro");

     if (edadInput === null) {
       break; 
     }
     
     const edad = Number(edadInput);
     
     if (isNaN(edad)) {
       alert("El número de edad no es un número válido, por favor inténtelo de nuevo");
       break; 
     }
   

     const alturaInput = prompt("ingrese su estatura para el registro");

      if(alturaInput === null){
         break;
      }
      
     const altura = Number(alturaInput)
     if(isNaN(altura)){
        alert("la medida de estatura no es valida,por favor intentar de nuevo")
        break;
     }


     const inputDineroGastado = prompt("Ingrese el monto abonado en la discoteca")

     if(inputDineroGastado === null){
      break;
     }

     const dineroGastado = Number(inputDineroGastado)
     
     if(isNaN(dineroGastado)){
        alert("el numero del dinero abonado no es correcta,por favor intentelo de nuevo")
        break;
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