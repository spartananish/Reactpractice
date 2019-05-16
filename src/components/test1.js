import  React,{Component} from 'react'
class Test extends Component{
    state={
        name:'Anish Kumar Singh',
        age:'23'
          }
          handleClick=(e)=>
          {
              this.setState({
                  name:'Piyush Kumar Singh',
                  age:'2234'
              })
              console.log(e.target)
            
        }
        // handleMouseOver=(e)=>
        // {
        //     console.log(e.target)
        // }
        // handleCopy=(e)=>
        // {
        //     console.log('Try being originial for once')
        // }
        handleChange=(e)=>
        {
            this.setState({
                name:e.target.value
            })
        }
        handlesubmit=(e)=>
        {
            e.preventDefault()
            console.log('Data Enetred')
        }

render()
{
    return(
        <div>
        <form onSubmit={this.handlesubmit}>
 <p>My name is {this.state.name} and my age is {this.state.age}</p>
 {/* <button onClick={this.handleClick}> Click Me</button>
 <button onMouseOver={this.handleMouseOver}>Hover Me</button>
 <button onCopy={this.handleCopy}>Copy Me</button> */}
 <input type='text'
     onChange={this.handleChange}
 />
 <button>Submit</button>
 </form>
        </div>
    )
}
}
export default Test