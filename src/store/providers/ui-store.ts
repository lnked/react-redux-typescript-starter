import { observable, action, computed } from 'mobx';

class UiStore {
  @observable type = 'grid';

  constructor (initialState?: any) {
    console.log({ initialState });
  }

  @computed get viewType () {
    return this.type;
  }

  @computed get getState () {
    return this.type;
  }

  @action set (type: string) {
    this.type = type;
  }
}

export default UiStore;
