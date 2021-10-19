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
    let people=null;
     if(this.showPersons){
       people=(
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
      </div> 

       );
     }

    return (
      <div className="App">
        <h1>Hello I am an explorer</h1>
        <p>this is the world</p>
        <button style={styles} onClick={this.togglePersonHandle}>display Pesorns</button>
        <br/>  <br/>   <br/>
        {/* <button style={styles} onClick={this.switchHandle}>switch name</button> */}

{people}
      </div>
    );
  }
  //return React.createElement('div',{className  : 'App'},React.createElement('h1',null,'hello I am pauline'),React.createElement('p',null,'this is from Rwanda coding acadeemy'));
};


export default App;



  deletePersHand=(persIndex)=>{
  const deletePersons= this.state.persons;
  deletePersons.splice(persIndex,1);
this.setState({persons:deletePersons});
  }




  import React from 'react';
import classic from './Cockpit.css';

const cockPit=(props)=>{

    const classesbind=[];
    let btnClass='';
    if (props.showPersonss){
    btnClass=classic.Redi;
 }

if(props.persons.length<=2){ 
  classesbind.push(classic.red);
}

if (props.persons.length<=1){
  classesbind.push(classic.bold);
}

    return (<div clasName={classic.Cockpit}><h1>Hello I am an explorer</h1>
    <p className={classesbind.join(' ')}>this is the world</p>


    <button className={this.btnClass} onClick={props.toggled}>
      display(toggle) Pesorns</button>
      </div>
);
    }

export default cockPit;