const person = {
  name: 'Max Mustermann',
  alter: 30
}

function hatEigenschaft(obj, eigenschaft) {
  return obj.hasOwnProperty(eigenschaft)
}

console.log(hatEigenschaft(person, 'name'))
console.log(hatEigenschaft(person, 'adresse'))