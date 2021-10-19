import React, { Component } from 'react';
import './App.css';
import Pers from './Person/Person.js';



// function App() {
//   return (
//     <div className="App">
//       <h1>Hello I am pauline developer</h1>
//     </div>
//   );
// }
class App extends Component {
  state = {
    persons: [
      { name: 'kalisa', age: 14 },
      { name: 'kelia', age: 16 },
      { name: 'pauline', age: 18 }
    ],
    othersState: ' some other values'
    , showPersons: false
  }

  switchHandle = (newName) => {
    //   console.log("you clicked on it ");
    //  this.state.persons[0].name= 'karara';  DON'T DO THIS
    this.setState({
      persons: [
        { name: newName, age: 14 },
        { name: "mutoni", age: 16 },
        { name: "pauline", age: 19 }
      ], otherState: 'yes i am on it'
    })
  }

  changeNameHand = (event) => {
    this.setState({
      persons: [
        { name: 'barbie', age: 14 },
        // { name: event.target.value ,age:16},
        { name: event.target.value, age: 16 },
        { name: "pauline", age: 18 }

      ]
    })
  }

  togglePersonHandle = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    const styles = {
      backgroundColor: '#4CAF50', color: 'white',
      border: '1px solid #4CAF50 ', borderRadius: '10px', padding: '10px'
    };

    return (
      <div className="App">
        <h1>Hello I am an explorer</h1>
        <p>this is the world</p>
        <button style={styles} onClick={this.togglePersonHandle}>display Pesorns</button>
        <br/>  <br/>   <br/>
        {/* <button style={styles} onClick={this.switchHandle}>switch name</button> */}

        { this.state.showPersons ?
        
          <div >
            <Pers name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >My hobby is reading</Pers>

            <Pers
              click={this.switchHandle.bind(this, 'ishema')}
              changed={this.changeNameHand}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            />

            <Pers
            click={this.switchHandle.bind(this, 'ishema')}
            changed={this.changeNameHand}
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div> : null

        }
      </div>
    );
  }
  //return React.createElement('div',{className  : 'App'},React.createElement('h1',null,'hello I am pauline'),React.createElement('p',null,'this is from Rwanda coding acadeemy'));
};


export default App;



// /////        <Pers name={this.state.persons[0].name}
// age={this.state.persons[0].age}
// >My hobby is reading</Pers>

// <Pers
//   click={this.switchHandle.bind(this, 'ishema')}
//   changed={this.changeNameHand}
//   name={this.state.persons[1].name}
//   age={this.state.persons[1].age}
// />

// <Pers
// click={this.switchHandle.bind(this, 'ishema')}
// changed={this.changeNameHand}
//   name={this.state.persons[2].name}
//   age={this.state.persons[2].age}
// />


// switchHandle = (newName) => {
//   //   console.log("you clicked on it ");
//   //  this.state.persons[0].name= 'karara';  DON'T DO THIS
//   this.setState({
//     persons: [
//       { name: newName, age: 14 },
//       { name: "mutoni", age: 16 },
//       { name: "pauline", age: 19 }
//     ], otherState: 'yes i am on it'
//   })
// }