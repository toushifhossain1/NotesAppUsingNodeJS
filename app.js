//const fs = require('fs')

//fs.writeFileSync('ChallengeNotes.js', '')


// note = require('./ChallengeNotes.js')
// const notes = note()
// console.log(notes)

//const validator = require('validator')

// console.log(validator.isEmail('1920404@gamil.com'))
//console.log(validator.isURL('www.facebook.com'))

const chalk = require('chalk')
console.log(chalk.green('Success!'))

// bonus

console.log(chalk.bold.yellow('This is in bold'))

console.log(chalk.inverse('This is in inversed'))

// this is full version
console.log(chalk.red.bold.inverse('Success!'))