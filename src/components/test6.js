import React,{Component} from 'react'
const Ninja4=({props})=>{
    const {ninjas}=props
    const ninjalist=ninjas.map(ninja=>{
        return ninja.age>20?( <div>
            <div>Name:{ninja.name}</div>
            <div>Age:{ninja.age}</div>
            <div>Belt:{ninja.belt}</div>
    
            </div>):(null)
    })
    return(
        <div>
        {ninjalist}
        </div>
    )
}
export default Ninja4