import {
  action,
  computed,
  observable,
  extendObservable,
} from 'mobx';

class AppStore {
  static mobxLoggerConfig: {
    enabled: false,
    methods: {
      loadTags: true,
    },
  };

  static defaultState = {
    query: '',
    results: [],
  };

  @observable query: string = '';

  @observable isLoading: boolean = false;

  constructor (initialState?: any) {
    if (initialState && Object.keys(initialState).length) {
      extendObservable(this, initialState);
    }
  }

  @computed get getState () {
    return this.query;
  }

  @action
  loadTags = (query: string) => {
    this.query = query;
  }
}

export default AppStore;
