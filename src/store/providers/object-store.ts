import { observable, action } from 'mobx';

const ObjectStore = observable({
  firstName: 'Yauhen',
  age: 30,

  get nickName() {
    // console.log('Generate nickName!');
    return `${this.firstName}${this.age}`;
  },

  increment() { this.age += 1; },

  decrement() { this.age -= 1; },
},                                    {
  increment: action('Plus one'),
  decrement: action('Minus one'),
},                                    {
  name: 'nickNameObservableObject',
});

export default ObjectStore;
