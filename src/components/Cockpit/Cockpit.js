import React, { useEffect } from 'react';
 import classic from './Cockpit.css';
 
 const CockPit=(props)=>{  

useEffect(()=>{
  console.log('[cockPit] use effect');
  setTimeout(()=>{ alert('saved data to cloud')},1000);
  return()=>{
    
    console.log('[Cockpit] clean up with useEFfect');
  }
},[]);
useEffect(()=>{
  console.log('[Cockpit] 2nd useEFfect');
  return()=>{
    console.log('[Cockpit] clean up with 2nd useEFfect');
  }
});
     const classesbind=[];
     let btnClass='';
     if (props.showPersons){
     btnClass=classic.Redi;
  }
 
 if(props.personsLength<=2){ 
   classesbind.push(classic.red);
 }
 
 if (props.personsLength<=1){
   classesbind.push(classic.bold);
 }
 
     return (<div className={classic.Cockpit}>
         <h1>{props.title}</h1>
     <p className={classesbind.join(' ')}>this is the world</p>
 
 
     <button className={btnClass} onClick={props.toggled}>
      display(toggle) Pesorns</button>
       </div>
 );
     }
 
 export default React.memo(CockPit);


