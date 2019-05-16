import React,{Component} from 'react'
class Ninja extends Component{
    render()
    {
        return(
            <div>
            <h1>Name:{this.props.name}</h1>
            <h1>Age:{this.props.age}</h1>
            <h1>Belt:{this.props.belt}</h1>
            </div>
        )
    }
}
 export default Ninja