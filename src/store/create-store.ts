import {
  UiStore,
  AppStore,
} from './providers'

import {
  STORE_UI,
  STORE_APP,
} from 'settings'

export const createStore = () => {
  // const initialState = (window && window.__INITIAL_STATE__) || {}

  // const { ui, app } = initialState

  // console.error(ui, app)

  // const uiStore = UiStore
  // const appStore = AppStore

  // Reflect.deleteProperty(window, '__INITIAL_STATE__')

  return {
    [STORE_UI]: UiStore,
    [STORE_APP]: AppStore,
  }
}
