// Hay librerias que Ts no soporta como la siguiente, porque no tienen un systema de tipado oficial.
// var _ = require('lodash')

// tranformando para que sea soportado por Ts
// Se le agrega soporte a tipos manualmete, se instalan como dependencias.

import _ from 'lodash'

const data = [
  {
    username: 'Raul',
    role: 'admin'
  },
  {
    username: 'Andrea',
    role: 'seller'
  },
  {
    username: 'Cristina',
    role: 'seller'
  },
  {
    username: 'Ronaldo',
    role: 'costumer'
  }
]

// agrupar
// En esta parte ya tenemos tipado

const rta = _.groupBy(data, item => item.role)
console.log(rta);



