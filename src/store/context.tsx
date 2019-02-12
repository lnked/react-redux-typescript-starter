import * as React from 'react'

export const Context = React.createContext({
  theme: 'dark',
  toggleTheme: () => {
    console.log('theme')
  },
})

export default function ({ children, defaultState }: any) {
  return (
    <Context.Provider value={defaultState}>
      {children}
    </Context.Provider>
  )
}

// const ThemeContext = React.createContext('light')

// class App extends React.Component {
//   render() {
//     // Use a Provider to pass the current theme to the tree below.
//     // Any component can read it, no matter how deep it is.
//     // In this example, we're passing "dark" as the current value.
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     )
//   }
// }

// // A component in the middle doesn't have to
// // pass the theme down explicitly anymore.
// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   )
// }

// class ThemedButton extends React.Component {
//   // Assign a contextType to read the current theme context.
//   // React will find the closest theme Provider above and use its value.
//   // In this example, the current theme is "dark".
//   static contextType = ThemeContext
//   render() {
//     return <Button theme={this.context} />
//   }
// }
