import React from "react";
import Input from "./components/input";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimateSharedLayout } from "framer-motion"; 

import {motions} from "./motions";

import Activity from "./components/activity"

class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    current:{
      title:"",
      body:"",
      uuid:""
    },
    all:[]
  }

  this.change=this.change.bind(this);
  this.add=this.add.bind(this);

}
change(e){
 
if(e.target.tagName==="INPUT"){
  let value=e.target.value;
  console.log(value)
  this.setState({
    current:{
    ...this.state.current,
      title:value,
      id:uuidv4()
    }
  })
}else{
  let value2=e.target.value;
  this.setState({
    current:{
    ...this.state.current,
      body:value2
    }
  })
  }
}

add(){
this.setState((state, props)=>{
 if(state.current.title!=="" && state.current.body!==""){
  return({
    current:{
      title:"",
      body:"",
      id:""
    },
  all:state.all.concat(state.current)
  }
  )
}
}, ()=>{console.log(this.state)
return
})

}



  render(){
  
     return(
     <StyledApp>
      <h1>TODO LIST</h1>
      <Input change={this.change} vals={ this.state.current } add={this.add} />
      <div>
        <AnimateSharedLayout>
        {this.state.all.map(item=>{
        return(
        <div key={item.id}  initial="hide" animate="dsiplay" variants={motions}>
            <h2>{item.title.toUpperCase()}</h2>
            <Activity>
              <h4>{item.body}</h4>
            </Activity>
          
        </div>
        )
        
      })
    }
        </AnimateSharedLayout>
      
    
    </div>
    </StyledApp>
     )
  }
 
}

const StyledApp=styled.div`
width:97%;
margin:0 auto;
background:#3b8845;
box-shadow:10px 10px 0.5 #474747;
h1{
  font-family:cursive;
}
div div {
  background-color:#608d66;
  border-radius:1.5rem;
  .line{
  background-color:white;
  height:0.1rem;
  width:100%
}
}

`
const StyledMotion=styled(motion.div)`
display:block;
`

export default App;
