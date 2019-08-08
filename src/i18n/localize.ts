// import React from 'react';
// import ReactDOM from 'react-dom';
// import { LocalizationConsumer, LocalizationProvider } from 'localize-react';

// const TRANSLATIONS = {
//   en: {
//     name: 'Alex',
//   },
// };

// const App = () => (
//   <LocalizationProvider
//     locale="en"
//     translations={TRANSLATIONS}
//   >
//     <LocalizationConsumer>
//       {({ translate }) => translate('name')}
//     </LocalizationConsumer>
//   </LocalizationProvider>
// );

// ReactDOM.render(<App />, node); // "Alex" will be rendered

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { LocalizationProvider, Message } from 'localize-react';

// const TRANSLATIONS = {
//   en: {
//     name: 'Alex',
//   },
// };

// const App = () => (
//   <LocalizationProvider
//     locale="en"
//     translations={TRANSLATIONS}
//   >
//     <Message descriptor="name" />
//   </LocalizationProvider>
// );

// ReactDOM.render(<App />, node); // "Alex" will be rendered

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { LocalizationProvider, useLocalize } from 'localize-react';

// const TRANSLATIONS = {
//   en: {
//     name: 'Alex',
//   },
// };

// function Test() {
//   const { translate } = useLocalize();

//   return translate('name');
// }

// const App = () => {

//   return (
//     <LocalizationProvider
//       locale="en"
//       translations={TRANSLATIONS}
//     >
//       <Test />
//     </LocalizationProvider>
//   );
// }

// ReactDOM.render(<App />, node); // "Alex" will be rendered

// import React from 'react';
// import { LocalizationContext, LocalizationProvider } from 'localize-react';

// const TRANSLATIONS = {
//   en: {
//     name: 'Alex',
//   },
// };

// class Translation extends React.PureComponent {
//   render() {
//     return (
//       <span>
//         {this.context.translate('name')}
//       </span>
//     )
//   }
// }

// Translation.contextType = LocalizationContext;

// const App = () => {
//   return (
//     <LocalizationProvider
//       locale="en"
//       translations={TRANSLATIONS}
//     >
//       <Translation />
//     </LocalizationProvider>
//   );
// }

// ReactDOM.render(<App />, node); // "Alex" will be rendered
