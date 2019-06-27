import { sum } from 'utils/sum';

test('summ without props', () => {
  expect(sum()).toEqual(0);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
});
