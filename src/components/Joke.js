import React from "react"
const Joke =(props)=>(
    <div>
        <h3 style={{display:props.question? "bloke":"none"}}>question : {props.question}</h3>
        <h3 style ={{color:!props.question && "red"}}>answer : {props.answer}</h3>
    </div>
)
export default Joke