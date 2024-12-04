import { products, calcStock, addProduct } from './product.service'

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
addProduct({
  title: 'tenis',
  createdAt: new Date(),
  stock: 100,
  size: 'XL'
})
console.log(products);

const total = calcStock()
console.log(total);
