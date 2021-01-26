import React, {useState} from "react";
import styled from "styled-components";

function Input(props){
    
    return(
        <InputStyle>
        
            <input type="text" onChange={(e)=>props.change(e)} placeholder="Input title" value={props.vals.title}/>
            <textarea placeholder="Input activity" onChange={(e)=>props.change(e)} value={props.vals.body}>

            </textarea>
            <button onClick={()=>{props.add()}}>add to list</button>
        </InputStyle>
    )
}

const InputStyle=styled.div`
font-size:3rem;
background:#ffffff;
display:flex;
flex-direction:column;
justify-content:center;
textarea{
    margin:10px;
    height:100px;
    border-radius: 20px;
    resize:none;
    outline: none;
    &:hover{
        cursor:pointer
    }
}
input{
    border-radius: 20px;
    outline: none;
    &:hover{
        cursor:pointer
    }
}
button{
    display:block;
    width:100px;
    border-radius:40px;
    border-style:none;
    &:hover{
        background: #3fffff;
    }
}
`

export default Input;