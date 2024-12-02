(() => {
  // Al colocar any se puede asignar cualquier tipo de dato a la variable
  let myDynamicVar: any;

  myDynamicVar = 'sdad'
  myDynamicVar = 132
  myDynamicVar = true
  myDynamicVar = {}

  myDynamicVar = 'Hola'
  const rta = (myDynamicVar as string).toLowerCase()

  myDynamicVar = 231
  const rta2 = (<number>myDynamicVar).valueOf()

})();
