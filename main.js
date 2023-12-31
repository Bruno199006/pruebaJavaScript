
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

     }else if (nombre === "" ){
      alert("Debe ingresar un nombre para iniciar el registro")
      continue;

     }else if(!isNaN(nombre)){
      alert("El nombre no puede ser un numero")
      continue;
     }

     const edadInput = prompt("Ingrese su edad para el registro");

     if (edadInput === null) {
       break; 
     }else if (edadInput === ""){

      alert("debe ingresar un valor para poder continuar con el registro");
      continue;
     }
     
     const edad = Number(edadInput);
     
     if (isNaN(edad)) {
       alert("El número de edad no es un número válido, por favor inténtelo de nuevo");
       continue; 
     }else if (edad < 18){
      alert("Debes ser mayor de edad para poder registrarte");
      continue;
     }
   

     const alturaInput = prompt("ingrese su estatura para el registro");

      if(alturaInput === null){
         break;
      }
      
     const altura = Number(alturaInput)
     if(isNaN(altura)){
        alert("la medida de estatura no es valida,por favor intentar de nuevo")
      continue;
     }else if (altura === 0){
      alert("Debes ingresar un valor para poder seguir con el registro")
      continue;
     }


     const inputDineroGastado = prompt("Ingrese el monto abonado en la discoteca")

     if(inputDineroGastado === null){
      break;
     }

     const dineroGastado = Number(inputDineroGastado)

     if(isNaN(dineroGastado)){
        alert("el numero del dinero abonado no es correcta,por favor intentelo de nuevo")
        continue;
     }else if (dineroGastado === 0){
      alert("Debes ingresar un monto para poder completar el registro");
      continue;
     }
     
     ingresarPersona(nombre, edad, altura, dineroGastado);

    console.log("nueva persona agregada al array")
    }
   
}
pedirDatosAlUsuario();


/// variable creada con reduce para calcular el gasto total de cada persona en la discoteca ///

const sumaDineroGastado = personasEnlaDiscoteca.reduce((total, persona) => total + persona.dineroGastado, 0);

console.log(personasEnlaDiscoteca);

console.log("El dinero total gastado por las personas en la discoteca es de : ", sumaDineroGastado);