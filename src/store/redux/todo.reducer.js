import { createSelector } from 'reselect';

const todoSelector = state => state.todo.todo;
const searchTermSelector = state => state.todo.searchTerm;

export const todosWithMilk = createSelector([todoSelector], todos => {
  return todos.filter(todo => todo.title.toLowerCase().includes('milk'));
});

export const todosWithMilkAndBread = createSelector([todosWithMilk], todos => {
  return todos.filter(todo => todo.title.toLowerCase().includes('bread'));
});

export const filteredTodos = createSelector(
  [todoSelector, searchTermSelector],
  (todos, searchTerm) => {
    return todos.filter(todo => todo.title.match(new RegExp(searchTerm, 'i')));
  }
);

// import { createSelector } from 'reselect'

// const shopItemsSelector = state => state.shop.items
// const taxPercentSelector = state => state.shop.taxPercent

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )

// const taxSelector = createSelector(
//   subtotalSelector,
//   taxPercentSelector,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

// export const totalSelector = createSelector(
//   subtotalSelector,
//   taxSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )

// let exampleState = {
//   shop: {
//     taxPercent: 8,
//     items: [
//       { name: 'apple', value: 1.20 },
//       { name: 'orange', value: 0.95 },
//     ]
//   }
// }

// console.log(subtotalSelector(exampleState)) // 2.15
// console.log(taxSelector(exampleState))      // 0.172
// console.log(totalSelector(exampleState))    // { total: 2.322 }
