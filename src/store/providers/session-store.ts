import { observable, action, computed } from 'mobx';

export interface UserProps {
  id: number;
  name: string;
}

class SessionStore {
  @observable user: UserProps = {
    id: 0,
    name: 'grid',
  };

  constructor (initialState?: any) {
    console.log({ initialState });
  }

  @computed get getUser () {
    return this.user;
  }

  @action set (user: UserProps) {
    this.user = user;
  }
}

export default SessionStore;
