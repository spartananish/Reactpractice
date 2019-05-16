
import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Test from './components/test1'
import Ninja from './components/test2'
import Ninja2 from './components/test3'
import Ninja3 from './components/test4'
import Ninja4 from './components/test6'
import Ninja6 from './components/test7'
import Functionalcomponent from './components/test5'
class App extends Component {
  state={ninjas:
    [
{name:"Anish",age:30,belt:'black',id:1},
{name:"Abhishek",age:23,belt:'green',id:2},
{name:'Roshni',age:123,belt:'red',id:3}
  ]
}

addNinja=(ninja)=>{
ninja.id=Math.random()
let ninjas=[...this.state.ninjas,ninja]
this.setState({
  ninjas:ninjas
})
}

deleteNinja=(id)=>{

}
  render()
  {

  
  return (
    <div className="App">
     <Test/>
     <Ninja name="Anish" age="25" belt="black"/>
     <Ninja2 name="Anish" age="25" belt="black"/>
     <Ninja3 deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
     {/* <Ninja4 ninjas={this.state.ninjas}/> */}
     <Ninja6 addNinja={this.addNinja}/>
     <Functionalcomponent deleteNinja={this.deleteNinja}/>
     
    </div>
  );
  }
}

export default App;
