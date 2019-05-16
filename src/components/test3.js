import React,{Component} from 'react'
class Ninja2 extends Component{
    render()
    {
        const {name,age,belt}=this.props
        return(
            <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{belt}</h1>

            </div>
        )
        
    }
}
export default Ninja2