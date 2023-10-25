const person = {
  name: 'Max Mustermann',
  age: 30,
  geburtstagsFeiern: function() {
    this.age++
  }
}

person.geburtstagsFeiern()

console.log(person.name)
console.log(person.age)