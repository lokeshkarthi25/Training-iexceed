import React from "react";

function Multi({x}){
    return(
        <p>Hello guys {x}</p>
    )
}
Multi.defaultProps={
    x:"lokesh"
}
export default Multi
