(() => {
  const logIn = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  logIn({
    email: 'Raul',
    password: 213432
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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

  console.log(products);


})();
