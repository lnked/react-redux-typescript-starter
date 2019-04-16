import { observable, action } from 'mobx'

export const ObjectStore = observable({
  firstName: 'Yauhen',
  age: 30,

  get nickName () {
    console.log('Generate nickName!')
    return `${this.firstName}${this.age}`
  },

  increment () {
    this.age++
  },

  decrement () {
    this.age--
  },
}, {
  increment: action('Plus one'),
  decrement: action('Minus one'),
}, {
  name: 'nickNameObservableObject',
})
