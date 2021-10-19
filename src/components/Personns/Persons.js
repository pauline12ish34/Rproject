import React ,{PureComponent} from 'react';
import Pers from './Person/Person';
class Persons extends PureComponent{
// static getDerivedStateFromProps(props,state){
// console.log('[Persons.js] getDerivedStateFromProps upd')
// return state;
// }
// componentWillReceiveProps(props){
//     console.log('[Persons.js] componentWillReceiveProps',props);
// }NOT SAFE

// shouldComponentUpdate(nextProps,nextState){
//     console.log('[Persons.js] shouldComponentUpdate');
    
//     if(nextProps.persons!==this.props.persons
//         ||nextProps.changed!==this.props.changed 
//          ||nextProps.clicked !==this.props.clicked){
//         return true;
//     }else{
//         return false;
//     }
// }


getSnapshotBeforeUpdate(previousProps,previousState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'Your Snapshot!'};
}


componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componenttDidUpdate');
    console.log(snapshot);
}
componentWillUnmount(){
    console.log('componentWillUnmount')
}
    render(){
     console.log('[Persons.js] rendering')

 return   this.props.persons.map((person,index)=>{
        return <Pers
        name={person.name }
         age={person.age}
         key={person.id}

         click={() =>this.props.clicked(index)}
         changed={(event)=>this.props.changed(event,person.id) }
         />

    });

} }
export default Persons;
