import React from 'react'
function Greet(){
const date = new Date()
const hours = date.getHours
const style ={
    "background-color":"red",
    color:"white"  
}
let time_now 

if(hours<12){
    time_now = "morning"
} 
else if(hours<17){
    time_now="afternoon"
}
else{
    
    time_now="night"
}

return(<h1 style={style}>now is {time_now}!</h1>)
}
export default Greet