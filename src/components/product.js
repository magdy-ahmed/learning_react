import React from "react"
const Product =(props)=>(
<div>
    <h2>{props.product.name}</h2>
<p>{props.product.price.toLocaleString("ar-EG",{style:"currency",currency:"EGP"})}
---{props.product.description}</p>
</div>
)
// 
export default Product