import React ,{Component}from "react"

import TodoData from "./TodoData"
class Todo extends Component{
constructor(props){
    super()
    
    this.state={todo:props.todo
    }
    console.log(this.state.todo)
    this.handelchange= this.handelchange.bind(this)
}

handelchange(id,props){
console.log("message",id)
this.setState  (prevState=>{
    const updateTodo = prevState.todo.map(todos=>{
        if (todos.id === id){
            todos.check = !todos.check
        }
    return todos
    })
    
    return {todo: updateTodo}
})}
render(){
    
return(

<div>
<h1>{this.state.todo.check}</h1>
    <input
    // checked={this.state.todo.checked}
     type="checkbox" 
     onChange ={()=>this.handelchange(this.state.todo.id,this.props)}
     />
<p>{this.state.todo.name}</p>

</div>)

}
}
export default Todo
