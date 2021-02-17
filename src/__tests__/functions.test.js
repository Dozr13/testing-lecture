const {sum, sayHello} = require('../functions')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})


test('sayHello does infact say hello', () => {
  expect(sayHello()).toBe('hello')
})


