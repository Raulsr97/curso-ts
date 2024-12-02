(() => {
  // Forma inferida

  let productPrice = 100
  // Reasignacion, solo usando el mismo tipo de dato number con el que se declaro la variable
  productPrice = 213
  console.log('ProductPrice: ', productPrice);

  // Forma explicita

  let costumerAge: number = 123
  // costumerAge = costumerAge + '23'
  costumerAge = costumerAge + 123

  // Si no se inicializa una variable se tiene que asignar de forma explicita el tipo de valor con el que se va a trabajar
  let productStock: number

  // Ts nos va a marcar como error cuando queramos utilizar una variable que no ha sido inicializada.
  console.log('productStock', productStock);
  if (productStock > 10) {
    console.log('Is greater');
  }

  let discount = parseInt('123')
  console.log('Discount: ', discount);

  let hex = 0xfff
  console.log(hex);

  let bin = 0b1011001
  console.log(bin);



})();
