import { Products } from './product.model'


export const products: Products[] = []

export const addProduct = (data: Products) => {
  products.push(data)
}

export const calcStock = (): number => {
  let total = 0
  products.forEach((item) => {
    total += item.stock
  })
  return total
}
