import React, { Component } from 'react';

 import classic from'./App.css';

 import Persons from '../components/Personns/Persons';
 import Cockpit from '../components/Cockpit/Cockpit'
 import withClass from '../hoc/withClass'
import Auxi from '../hoc/Auxiliary'



class App extends Component {
constructor(props){
  super(props);
  console.log('[App.js] constructor')
}

  state = {
    persons: [
      {id:1, name: 'kalisa', age: 14},
      { id:2, name: 'kelia', age: 16},
      {id:3, name: 'pauline', age: 18 }
    ],
    othersState: ' some other values', 
    showPersons: false,
    showCockpit:true,
    changeCount:0
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props)
  return state;
  }
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componenttDidUpdate');
   
}

  changeNameHand = (event,idi) => {
    const personIndex=this.state.persons.findIndex(per=>{
      return per.id===idi;
    });
    const person={...this.state.persons[personIndex]}
  //  const person=Object.assign({},this.state.persons[personIndex])
  person.name=event.target.value;  
  const personsUpdate=[...this.state.persons];
  personsUpdate[personIndex]=person;

  this.setState({
      persons: personsUpdate,changeCount:(this.state.changeCount+1)
    });
  }

  togglePersonHandle = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersHand=(persIndex)=>{
     const deletePersons= this.state.persons.slice();
// const persones=[...this.state,persons];

    deletePersons.splice(persIndex,1);
  this.setState({persons:deletePersons});
    }
    

  render() {
    console.log('[App.js] render')

    let people=null;
    

     if(this.state.showPersons){
       people=
        <div >
         <Persons
         persons={this.state.persons}
         clicked={this.deletePersHand}
         changed={this.changeNameHand}
         />

      </div> 
       ;
     }


    return (
     
      <Auxi>
        <button onClick={()=>{this.setState({showCockpit:false})}}>remove cockpit</button>
        {this.state.showCockpit ?  (<Cockpit 
      title={this.props.appTitle}
      personsLength={this.state.persons.length}
      showPersons={this.state.showPersons}
       toggled={this.togglePersonHandle}
   />):null}
   

{people} 
      </Auxi>
     
    );
  }
  
};


export default withClass(App,classic.App);



