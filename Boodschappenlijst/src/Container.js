import React from 'react'

import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends React.Component {
    constructor(prop){
        super(prop)
        this.state = {
            groceryItems: [{ id: 1, title: "Zak", amount: 1, readonly: true}]
            ,
            shoppingListItems: [
                { id: 1, title: "Zak", amount: 1, readonly: false},
                { id: 2, title: "Borstel", amount: 1, readonly: false},
                { id: 3, title: "Chips", amount: 1, readonly: false},
                { id: 4, title: "Appels", amount: 1, readonly: false},
                { id: 5, title: "Bananen", amount: 1, readonly: false},
                { id: 6, title: "Peren", amount: 1, readonly: false}
            ]
        }
    }
    render(){
        const addAmountToItem = itemTitle => {
            const groceryList = [...this.state.groceryItems];
            const newList = groceryList.map(groceryItem => {
              if (groceryItem.title === itemTitle.target.innerText) {
                groceryItem.amount++;}
              return groceryItem;
            })
            this.setState({ groceryItems: newList });
                } 
      
            const addNewShoppingItem = event => {
                event.preventDefault();
            
            const newShoppingItem = {
              id: this.state.shoppingListItems.length + 1,
              title: event.target.input.value, 
              amount: 1
            }

            this.setState(prevState => {
              const newList = prevState.shoppingListItems.concat(newShoppingItem);
              return {
                shoppingListItems: newList
              }
            })
          
        };
      
            const emptyCart = () => {
                this.setState({ groceryItems: [] });
            };
      
            const addGrocery = grocery => {
                const currentGroceryList = this.state.groceryItems;
                const groceryItem = currentGroceryList.filter(
                    item => item.title === grocery.target.innerText
                );
            
               (groceryItem.length === 0) ? 
                    addItem(grocery): 
                    addAmountToItem(grocery)
                };
            
        const addItem = grocery => {
          
            const item = {
              id: this.state.groceryItems.length + 1,
              title: grocery.target.innerText, amount: 1, readonly: true
            };
            this.setState({ groceryItems: this.state.groceryItems.concat(item) });
            }
            return (
                <div className="container">
                <div className="groceries-list basket">
                <h1> Shopping List</h1>
                    <ShoppingCart
                        addGrocery={addGrocery}
                        shoppingListItems={this.state.shoppingListItems}
                        addNewShoppingItem={addNewShoppingItem}
                    />
                </div>   
                    <div className="groceries-list groceries">
                        <h1>Basket</h1>
                        <GroceryList
                            groceryItems={this.state.groceryItems}
                            handleClickEmptyCart={emptyCart}
                        />
                    </div>
                </div>       
            );
        }
};
export default Container
