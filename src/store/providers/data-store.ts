import { observable, action, computed } from 'mobx';

export interface DataProps {
  id: number;
  name: string;
}

class DataStore {
  @observable user: DataProps = {
    id: 0,
    name: 'grid',
  };

  constructor (initialState?: any) {
    console.log({ initialState });
  }

  @computed get getUser () {
    return this.user;
  }

  @action set (user: DataProps) {
    this.user = user;
  }
}

export default DataStore;
