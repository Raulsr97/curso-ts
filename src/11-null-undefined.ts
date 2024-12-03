(() => {
  // undefined y null no se pueden utilizar cuando el tipo de dato ya esta declarado, ya que son tipos de datos diferentes
  // let myNumber: number = undefined
  // let myString: string = null

  // Cuando se le asigna una valor null o undefined a una variable si tipo de dato es any.
  let myNull = null
  let myUndefined = undefined

  // Definiendo explícitamente el tipo de dato null y undefined.
  let myNull2: null
  let myUndefined2: undefined

  // Existen ocaciones en las que un tipos de dato se necesita como numero pero al principio tambien se necesita que sea null o undefined.
  let myNumber2: number | null = null
  myNumber2 = 123

  let myString2: string | undefined = undefined
  myString2 = 'Raul'

  // function hi(name: string | null ) {
  //   let hello = 'Hola '
  //   if(name) {
  //     hello += name
  //   } else {
  //     hello += 'nobody'
  //   }
  //   console.log(hello);
  // }

  // hi('Raul')
  // hi(null)

  function hiV2(name: string | null) {
    let hello = 'Hola '
    hello += name?.toLowerCase() || 'nobody'
    console.log(hello);
  }

  hiV2('Andy')
  hiV2(null)
})();
