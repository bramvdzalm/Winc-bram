import ListItem from './ListItem'
import React from "react"

class List extends React.Component {
 
    render() {
       return (
            <div>
                <ul> 
                    {this.props.items.map(item => 
                        <ListItem
                            key ={item.id}
                            item = {item}
                            value = {item.title}
                            amount = {item.amount}
                            readonly={item.readonly}
                            addGrocery = {this.props.addGrocery}
                        /> 
                    )}          
               </ul> 
           </div>
              
       )}
                   }

export default List