import React from "react";


function Button({text, onclickFunction}){
return(
    <button onClick = {onclickFunction}>{text}</button>
)
}


export default Button;