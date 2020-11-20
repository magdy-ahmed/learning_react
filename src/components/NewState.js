import React,{Component} from "react"
class NewState extends Component{
    constructor(){
        super()
        this.state={
            name:"yourname",
            age:"yourage",
            num:1
        }
        this.eventclick = this.eventclick.bind(this)
    }
    eventclick() {
        this.setState((prevstate)=>{return{
              num : prevstate.num + 1
        }}
      
        )}
    render(){
    return(
    <div>
        <ol>
            <li>{this.state.name}</li>
            <li>{this.state.age}</li>
        </ol>
    <h1>{this.state.num}</h1>
    <button onClick={this.eventclick}>onclick</button>
    </div>)
    }}

export default NewState