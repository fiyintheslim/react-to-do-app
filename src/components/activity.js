import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion"; 

const Activity=(props)=>{
    const [check, setCheck]=useState(false);
    const change=()=>{
        setCheck(!check)
    }
    return(
        <StyledDiv>
            <input type="checkbox" onClick={change}/>
            <div className={check?"lined":""}>
                {props.children}
            </div>
        </StyledDiv>
        

    )
}

const StyledDiv=styled.div`
display:flex;
justify-content:flex-start;
align-items:baseline;
div{
    font-size:1.7rem;
}
.lined{
    text-decoration:line-through;
    font-weight:lighter;
    font-size:1rem;
    color:grey;
}
input{
   
}
`

export default Activity;