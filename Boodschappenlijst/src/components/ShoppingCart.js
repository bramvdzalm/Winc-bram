import React from 'react'
import List from "./List"
import Input from "./Input"


function ShoppingCart({addGrocery, shoppingListItems, addNewShoppingItem}) {
    return(
        <div>
            <Input click={addNewShoppingItem} />
            <List 
                items={shoppingListItems} 
                addGrocery = {addGrocery} 
            />
        </div>
)}

export default ShoppingCart