(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Products = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Products[] = []

  const addProduct = (data: Products) => {
    products.push(data)
  }

  addProduct({
    title: 'camisa',
    createdAt: new Date(),
    stock: 12,
    size: 'S'
  })
  addProduct({
    title: 'pantalon',
    createdAt: new Date(),
    stock: 4,
  })

  products.push({
    title: 'werw',
    createdAt: new Date(),
    stock: 234
  })
  console.log(products);

})();
