import * as React from 'react'

import {
  STORE_UI,
  STORE_APP,
} from 'settings'

export interface OuterProps {
  [STORE_UI]: any;
  [STORE_APP]: any;
}

export const Store = React.createContext({
  [STORE_UI]: {},
  [STORE_APP]: {},
})

export class Provider extends React.Component<OuterProps, any> {
  render () {
    const { children, ...props } = this.props

    return (
      <Store.Provider value={props}>
        {children}
      </Store.Provider>
    )
  }
}

export const Consumer = Store.Consumer

// import React, {Component } from 'react';
// import './scss/style.scss';
// import Layout from './components/Layout';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Popup from './components/Popup';
// import AddItem from './components/AddItem';
// import { ElementType } from './constants';
// import Store from './Store';
// import uuid from 'uuid/v4';
// import { clone } from './helpers/utils';
// import { duration } from 'moment';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listOfStages: [],
//       stages: {},
//       steps: {},
//       elements: {}
//     };
//     this.api = {
//       saveState: this.saveState.bind(this),
//       addStage: this.addStage.bind(this),
//       addStep: this.addStep.bind(this),
//       addItem: this.addItem.bind(this),
//       deleteItem: this.deleteItem.bind(this),
//       deleteStep: this.deleteStep.bind(this),
//       deleteStage: this.deleteStage.bind(this),
//       editItem: this.editItem.bind(this),
//       editStep: this.editStep.bind(this),
//       editStage: this.editStage.bind(this)
//     }
//   }

//   componentDidMount() {
//     this.loadState();
//   }

//   componentDidUpdate() {
//     this.saveState();
//   }

//   render() {
//     return (
//       <Router basename={process.env.PUBLIC_URL}>
//         <Store.Provider value={Object.assign({}, this.state, this.api)}>
//           <Layout/>
//           <AddItem type={ElementType.STAGE}/>
//           <Route path='/(add|edit)/:type/:parentKey?' component={Popup}/>
//         </Store.Provider>
//       </Router>
//     );
//   }

//   saveState() {
//     localStorage.setItem(`state`, JSON.stringify(this.state));
//   }

//   loadState() {
//     const state = localStorage.getItem(`state`);
//     if (state !== null) {
//       this.setState(JSON.parse(state));
//     }
//   }

//   setNewStateWithTime(stateChanges) {
//     const newState = Object.assign(clone(this.state), stateChanges);
//     const newStages = newState.stages;
//     const newSteps = newState.steps;
//     newState.listOfStages.forEach((stageKey) => {
//       const stageTotalTime = duration(`0`);
//       if (newStages[stageKey].items.length > 0) {
//         newStages[stageKey].items.forEach((stepKey) => {
//           const stepTotalTime = duration(`0`);
//           if (newSteps[stepKey].items.length > 0) {
//             newSteps[stepKey].items.forEach((elementKey) => {
//               stepTotalTime.add(newState.elements[elementKey].time, String);
//             });
//             newSteps[stepKey].time = `${stepTotalTime.days()}:${stepTotalTime.hours()}:${stepTotalTime.minutes()}`;
//           }
//           stageTotalTime.add(stepTotalTime);
//         });
//       }
//       newStages[stageKey].time = `${stageTotalTime.days()}:${stageTotalTime.hours()}:${stageTotalTime.minutes()}`;
//     });
//     this.setState(newState);
//   }

//   addStage(data) {
//     const newStages = clone(this.state.stages);
//     const newKey = uuid();
//     newStages[newKey] = Object.assign({}, data, {items: []});
//     const newListOfStages = this.state.listOfStages.slice();
//     newListOfStages.push(newKey);
//     this.setNewStateWithTime({listOfStages: newListOfStages, stages: newStages});
//   }

//   deleteStage(stageKey) {
//     const newListOfStages = clone(this.state.listOfStages);
//     const newStages = clone(this.state.stages);
//     const newSteps = clone(this.state.steps);
//     const newElements = clone(this.state.elements);
//     newStages[stageKey].items.forEach((stepKey) => {
//       newSteps[stepKey].items.forEach((itemKey) => delete newElements[itemKey]);
//     });
//     delete newStages[stageKey];
//     newListOfStages.splice(newListOfStages.indexOf(stageKey), 1);
//     this.setNewStateWithTime({
//       listOfStages: newListOfStages,
//       stages: newStages,
//       steps: newSteps,
//       elements: newElements
//     });
//   }

//   editStage(data, stageKey) {
//     const newStages = clone(this.state.stages);
//     newStages[stageKey] = Object.assign(newStages[stageKey], data);
//     this.setNewStateWithTime({stages: newStages});
//   }

//   addStep(data, stageKey) {
//     const newSteps = clone(this.state.steps);
//     const newKey = uuid();
//     newSteps[newKey] = Object.assign({}, data, {items: []});
//     const newItems = this.state.stages[stageKey].items.slice();
//     newItems.push(newKey);
//     const newStages = clone(this.state.stages);
//     newStages[stageKey].items = newItems;
//     this.setNewStateWithTime({stages: newStages, steps: newSteps});
//   }

//   deleteStep(stageKey, stepKey) {
//     const newStages = clone(this.state.stages);
//     const newSteps = clone(this.state.steps);
//     const newElements = clone(this.state.elements);
//     newSteps[stepKey].items.forEach((item) => delete newElements[item]);
//     delete newSteps[stepKey];
//     newStages[stageKey].items.splice(newStages[stageKey].items.indexOf(stepKey), 1);
//     this.setNewStateWithTime({stages: newStages, steps: newSteps, elements: newElements});
//   }

//   editStep(data, stepKey) {
//     const newSteps = clone(this.state.steps);
//     newSteps[stepKey] = Object.assign(newSteps[stepKey], data);
//     this.setNewStateWithTime({steps: newSteps});
//   }

//   addItem(data, stepKey) {
//     const newElements = clone(this.state.elements);
//     const newKey = uuid();
//     newElements[newKey] = data;
//     const newItems = this.state.steps[stepKey].items.slice();
//     newItems.push(newKey);
//     const newSteps = clone(this.state.steps);
//     newSteps[stepKey].items = newItems;
//     this.setNewStateWithTime({steps: newSteps, elements: newElements});
//   }

//   deleteItem(stepKey, itemKey) {
//     const newSteps = clone(this.state.steps);
//     const newElements = clone(this.state.elements);
//     delete newElements[itemKey];
//     newSteps[stepKey].items.splice(newSteps[stepKey].items.indexOf(itemKey), 1);
//     this.setNewStateWithTime({steps: newSteps, elements: newElements});
//   }

//   editItem(data, itemKey) {
//     const newElements = clone(this.state.elements);
//     newElements[itemKey] = Object.assign(newElements[itemKey], data);
//     this.setNewStateWithTime({elements: newElements});
//   }

// }
