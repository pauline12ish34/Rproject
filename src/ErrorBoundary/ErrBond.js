import React,{Component} from 'react';
class ErrBond extends Component{
state={
    hasErr:false,
    errorMessage: ''
}

catchErrHandler= (info,err)=>{
    this.setState({
        hasErr:true,
        errorMessage:err
    }
)};

    render(){ 
        if (this.state.hasErr)
      {  return <h1>{this.errorMessage}</h1>}
else{
    return this.props.children;
}
    }

}

export default ErrBond;