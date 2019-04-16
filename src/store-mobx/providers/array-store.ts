import { observable } from 'mobx'

export const ArrayStore = observable([
  { text: 'Test 1' },
  { text: 'Test 2' },
  { text: 'Test 3' },
])

// Example
// ArrayStore.push({ text: 'Test 4' })
