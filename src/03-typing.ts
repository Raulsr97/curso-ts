// Función anónima autoejecutada, con estas funciones aislamos el alcance de las variables que encapsulamos, esto tiene el propósito de que si se usan variables con el mismo nommbre en otro archivo no genere errores, estos errores ocurren cuando se esta trabajando con ts nativo.

(() => {
  let myProductName = 'Producto 1'
  let myProductPrice = 123


  // Al momento de asignar una variable con cierto tipo, no se le puede asignar otro tipo de valor mas adelante

  // myProductName = 23213
  // myProductPrice = 'fdsf'


  // Solo podemos usar los metodos dependiendo el tipo que se le haya asignado a la variable.

  myProductName.toLowerCase()
  myProductPrice.valueOf()

  // En una constante ya no se puede reasignar el valor
  const myProductStock = 12122
})()



