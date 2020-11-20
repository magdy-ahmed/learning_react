import React from 'react'
const ContactCard=(props)=>(
<div className="contact-card" >
<h1>{props.name}</h1>
    <img  src={props.imgurl} style={{"height":"250px","width":"250px"}}/>
<p>phone {props.phone}</p>
    <p style={{block:"none"}}>emil: {props.Email}</p>
</div>    
)
export default ContactCard