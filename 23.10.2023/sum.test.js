const sum1 = require('./sum')
test('adds 1 + 2 to equal 3', () => {
  expect(sum1(1, 2)).toBe(3)
})


const sum = require('./sum')
test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10)
})