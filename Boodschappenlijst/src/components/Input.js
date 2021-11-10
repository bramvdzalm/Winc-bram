import React from "react"

function Input(item) {

   
    return (
    <div>
        <form className="groceries-input" onSubmit={item.click}> 
            <input 
            className="input-primary" 
            type="text" 
            name="input"
            placeholder="Add item">
                
            </input>
            <button className="button-primary" type="submit">Add</button>
        </form> 
    </div>
        )
    
}
 
export default Input