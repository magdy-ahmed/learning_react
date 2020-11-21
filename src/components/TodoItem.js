import React from "react"

function TodoItem(props) {
    console.log(props.item.id)
    console.log(props.item)

    const CompletedStyle ={
        fontStyle:"italic",
        color:"#aaa",
        textDecoration: "line-through"    }
    return (
        <div className="todo-item">
            <input 
                id ="checkitem"
                type="checkbox" 
                onClick={() => props.handleChange(props.item.id)}
                checked={props.item.check} 
                
            />
            <label style={props.item.check?CompletedStyle:null}>{props.item.name}</label>
        </div>
    )
}


export default TodoItem