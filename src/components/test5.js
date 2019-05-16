import React,{Component} from 'react'
const functionalComponent=({ninjas,deleteNinja})=>{
    const{ninjas}=ninjas
    const ninjalist=ninjas.map(ninja=>{
    return(
        <div className="ninja" id={ninja.id}>
        <div>Name:{ninja.name}</div>
        <div>Age:{ninja.age}</div>
        <div>Belt:{ninja.belt}</div>
        <button onClick={()=>deleteNinja(ninja.id)}></button>

        </div>
    )
})
return(
    <div>
    {ninjalist}
    </div>
)

}
export default functionalComponent
// this example is for functional component insted of class based component here we need not to use render method