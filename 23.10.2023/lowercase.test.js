const lowerCase = require('./lowercase')
test('uppercase to lowercase', () => {
  expect(lowerCase('klein')).toBe('klein')
})