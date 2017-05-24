const sum = require('./src/sum').sum
const mult = require('./src/sum').multiply

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('multiply 1 * 3 to equal 3', () => {
  expect(mult(1, 3)).toBe(3)
})
