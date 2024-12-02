(() => {
  let myProductName = 'helmet'
  myProductName = 'new helmet'

  let productDescription = 'helmet for cafe racer motorcycles'

  let price = 2500

  let isAvailable = true

  let summary = `
    Name: ${myProductName}
    Price: $${price}
    Description: ${productDescription}
    Is available: ${isAvailable}
  `

  console.log(summary);

})();
