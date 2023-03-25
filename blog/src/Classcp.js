import React,{Component} from 'react';

class Classcp extends Component{

    constructor(){
        super();
        this.state={
            data:1
        }
    }

    apple(){
        this.setState({data:this.state.data+1})

    }

    render(){
        return (
            <div>
            <h2>class component</h2>
            <h2>{this.state.data}</h2>
            <button onClick={()=>this.apple()}>update</button>
            </div>
        )
    }
}
export default Classcp;

// import React, { Component } from 'react'

// export class Classcp extends Component {
//   render() {
//     return (
//       <div>Classcp</div>
//     )
//   }
// }

// export default Classcp




