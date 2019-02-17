/* tslint:disable */
import { observable, action, computed } from 'mobx'
// import { decorate, observable, action, computed } from 'mobx'

// https://auth0.com/blog/managing-the-state-of-react-apps-with-mobx/

// const todos = observable([
//   {
//     title: "Read Auth0 Blog",
//     done: false,
//   },
//   {
//     title: "Write MobX article",
//     done: true
//   }
// ]);

// const reactionSample = reaction(
//   () => todos.map(todo => todo.title),
//   titles => console.log("Reaction: ", titles.join(", "))
// );

export class Stores {

  @observable reviewList = [
    {review: "This is a nice article", stars: 2},
    {review: "A lovely review", stars: 4},
  ];

  @action addReview (e) {
    this.reviewList.push(e);
  }

  @computed get reviewCount() {
    return this.reviewList.length;
  }

  @computed get averageScore() {
    let avr = 0;
    this.reviewList.map(e => avr += e.stars);
    return Math.round(avr / this.reviewList.length * 100) / 100;
  }

  @computed get asJson() {
    return {
        id: this.id,
        completed: this.completed,
        task: this.task,
        authorId: this.author ? this.author.id : null
    }
  }
}

// decorate(Stores, {
//   reviewList: observable,
//   addReview: action,
//   averageScore: computed,
//   reviewCount: computed,
// })

// export default Stores;

export class Store {

  testTimes100 = 0

  @observable test = 0

  @observable variable = 0

  @action setVariable (variable: number) {
    this.variable = variable
  }

  @computed get computedTest () {
    return this.testTimes100 * 100
  }

  // when(
  //   () => this.isEnabled,
  //   () => this.exit()
  // )

}

export class List extends Store {

  constructor (props: any) {
    super()

    console.log(props);
  }

}

class ListStore {

  @observable list = [
    'Hello World!',
    'Hello React Native!',
    'Hello MobX!'
  ]

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

  @computed get dataSource() {
    return this.ds.cloneWithRows(this.list.slice())
  }

}

export default ListStore

// @observer class List extends Component {
//   render() {
//     return (
//       <ListView
//         dataSource={listStore.dataSource}
//         renderRow={row => <Text>{row}</Text>}
//         enableEmptySections={true}
//       />
//     );
//   }
// }

console.log(observable)

// class User {
//   @observable name
// }

// class Profile extends React.Component {

//   @computed get name() {
//     // correct; computed property will track the `user.name` property
//     return this.props.user.name
//   }

//   render() {
//     return <div>{this.name}</div>
//   }

// }
