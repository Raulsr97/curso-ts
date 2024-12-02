(() => {
  // Este array solo va a permitir agregar elementos de tipo number si se intenta agregar elemento de otro tipo dara error.
  let numbers = [1, 2, 3, 5]
  numbers.push('vdv')
  numbers.push({})
  numbers.push(true)
  numbers.push(8)

  // Si se quiere tener un array con diferentes tipos de datos no se puede hacer inferido, se tiene que realizar explícito con los tipos de datos que se quieren manejar
  let mixed: (number | string | boolean )[] = ['Hola', 56]
  mixed.push({})
  mixed.push(23)
  mixed.push(true)
  console.log(mixed);

  // Tambien solo se podran utilizar los metodos propios de cada tipo de dato, en este caso se quiere duplicar cada elemento pero nos marca error ya que no se puede realizar la operacion de todos los elementos del array ya que no es un array solo de números.
  let numbers2 = [1, 2, 3, 4, 'hj']
  let doubles = numbers2.map(item => item * 2)
  console.log(doubles);


})();
