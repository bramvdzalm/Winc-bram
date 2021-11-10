import React from 'react'
import List from "./List"

function GroceryList({groceryItems, handleClickEmptyCart}) {
    return(
        <div className="grocery-container">
            <List className="groceries" 
                items={groceryItems} 
            />

            <div className="button-container">
                <button className="button-primary" onClick={handleClickEmptyCart}>
                    Empty 
                </button>
            </div>
        </div>
    )
    
}

export default GroceryList
