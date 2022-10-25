//const { argv } = require('yargs');

const yargs = require('yargs')
    .option('Num1', {alias: 'A',type: 'number'})
    .option('Num2', {alias: 'B', type: 'number'})

      let suma = yargs.argv.A + yargs.argv.B;  
      console.log(suma)
