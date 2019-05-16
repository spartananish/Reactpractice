import React,{Component} from 'react'
class Ninja6 extends Component{
    state={
name:null,
age:null,
belt:null
    }

    handleOnChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addNinja(this.state)
    }
    render()
    {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name;</label>
                <input type="text" id="name" onChange={this.handleOnChange}></input>
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" onChange={this.handleOnChange}></input>
                <label htmlFor="belt">Belt:</label>
                <input type="text" id="belt" onChange={this.handleOnChange}></input>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
export default Ninja6