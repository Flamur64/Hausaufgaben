const lowerCase = require('./lowercase')
test('uppercase to lower case', () => {
  expect(lowerCase('klein')).toBe('klein')
})