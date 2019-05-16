import React,{Component} from 'react'
class Ninja3 extends Component{
    render()
    {
        const{ninjas}=this.props
        const ninjalist=ninjas.map(ninja=>{
        return(
            <div className="ninja" id={ninja.id}>
            <div>Name:{ninja.name}</div>
            <div>Age:{ninja.age}</div>
            <div>Belt:{ninja.belt}</div>

            </div>
        )
    })
    return(
        <div>
        {ninjalist}
        </div>
    )
    }
}
export default Ninja3