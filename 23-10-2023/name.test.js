const greet = require('./name')
test('Hier ist die Begrüßung', () => {
  expect(greet('Flamur')).toBe('Hallo, Flamur! Willkommen zurück.')
})