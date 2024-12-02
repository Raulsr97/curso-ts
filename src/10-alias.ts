(() => {
  // Alias
  type UserID = string | number
  let userId: UserID

  // Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSizes: Sizes


  function greeting(userId: UserID, shirtSizes: Sizes ) {
    if(typeof userId === 'string') {
      console.log(`String: ${userId.toLowerCase()}`);
    }
  }

  greeting('432', 'M')
  greeting(213, 'L')


})
