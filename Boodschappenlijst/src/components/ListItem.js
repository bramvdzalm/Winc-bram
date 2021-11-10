import React from "react"

function ListItem(props) {
    return (
        <div className="list-item-div">
            <li
                className="list-item"
                key={props.key}
                onClick={props.addGrocery}>
                <span>  {props.value} </span>
                <span>{props.readonly ? `Amount: ${props.amount}` : ""}</span>    
            </li>
        </div>
    )
}

export default ListItem