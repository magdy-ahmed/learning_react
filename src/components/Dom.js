import React from "react"
import ReactDom from "react-dom"
function HelloReactDom(){
    return  (<div><h1>hello react dom</h1>
    <ul>
    <li> 1</li>
    <li> 2</li>
    <li> 3</li>
</ul></div>)
}
// const NewDom = ReactDom.render(<HelloReactDom />,document.getElementById("root"))
export default HelloReactDom