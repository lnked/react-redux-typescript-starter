import { sum } from '../../utils/sum'

test('summ without props', () => {
  expect(sum()).toBe(0)
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
