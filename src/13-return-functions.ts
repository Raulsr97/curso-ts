(() => {
  // Se puede especificar el tipado si así se requiere en el retorno de una función, aunque tambien ts lo realiza de forma inferida,
  const calcTotal = (prices: number[]): number => {
    let total = 0
    prices.forEach((item) => {
      total += item
    })
    return total
  }

  // Función sin retorno (Void)
  const printTotal = (prices: number[]): void => { //Aseguramos que la función no retorne nada agregando explícitamente void en caso de ser necesario
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`);
  }

  printTotal([1, 2, 3, 4, 5])




})();
