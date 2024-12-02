(() => {
  // Especificando los tipoes de datos que va a utlizar la variable
  let userId: string | number
  userId = 'dffdsaf'
  userId = 234


  // Creando una condición de para que la variable se comporte como string o como número.
  function unionTypes(myText: string | number) {
    if(typeof myText === 'string') {
      console.log(`String: ${myText.toLowerCase()}`);
    } else {
      console.log(`Number: ${myText.toFixed(1)}`);
    }
  }

  unionTypes('Raul')
  unionTypes(123.4321)

})();
