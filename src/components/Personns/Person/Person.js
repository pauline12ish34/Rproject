import React,{Component}  from 'react';
// import './Person.css';
import classi from './Person.css';
import Aux from"../../../hoc/Auxiliary"
import withClass from"../../../hoc/withClass";
class Person extends Component{
// const pers= props=>{
  // console.log('[Person.js] rendering')
render(){
  return(

    // <div className="Person" style={stylee}>
      // <div className={classi.Person}>
          <Aux>
    <p onClick={this.props.click}>I am a {this.props.name}
    and i am {this.props.age}years old</p>
    <p key="i2" >{this.props.children}</p>
    <input key="i3" type="text" onChange={this.props.changed} 
    value={this.props.name}/>
    </Aux>
    );
    // </div>
    // </div>

  
    
 
  }
}
 export default withClass(Person,classi.Person);   