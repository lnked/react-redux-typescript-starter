import { observable, action, computed, autorun } from 'mobx';

export const appState = observable({
  todos: [],

  timer: 0,

  get completedCount () {
    return this.todos.filter((todo: any) => todo.completed).length;
  },
});

export default class CounterStore {
  @observable count = 0;

  @action increment = () => {
    this.count += 1;
  }

  @action decrement = () => {
    this.count -= 1;
  }

  @computed get fullName () {
    return this.count;
  }
}

autorun(() => {
  console.log('Completed %d of %d items',
              appState.completedCount,
              appState.todos.length,
  );
});
