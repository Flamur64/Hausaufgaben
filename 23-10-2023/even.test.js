const isEven = require('./even')
test('die nummer ist gerade', () => {
expect(isEven(7)).toBe(false)
})

test('die nummer ist gerade', () => {
    expect(isEven(6)).toBe(true)
    })