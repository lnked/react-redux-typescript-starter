export const UiStore = {
  theme: {
    dark: { whiteColor: false, fontFamily: 'Roboto, sans-serif' },
    light: { whiteColor: true, fontFamily: 'Roboto, sans-serif' },
  },
  type: 'grid',
}

// export class UiStore {
//   type: string = 'grid'

//   theme: any = {
//     dark: { whiteColor: false, fontFamily: 'Roboto, sans-serif' },
//     light: { whiteColor: true, fontFamily: 'Roboto, sans-serif' },
//   }

//   constructor (initialState?: any) {
//     console.log({ initialState })
//   }

//   get view_type () {
//     return this.type
//   }

//   get getState () {
//     return this.type
//   }

//   set (type: string) {
//     this.type = type
//   }
// }
