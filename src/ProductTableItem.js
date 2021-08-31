import React from 'react'

export default function ProductTableItem(props) {
    return (
        <div className="row">
            <div className="col">{props.name} </div>
            <div className="col text-end">{(Math.round(props.price*100)/100).toFixed(2)}</div>
        </div>
    )
}
