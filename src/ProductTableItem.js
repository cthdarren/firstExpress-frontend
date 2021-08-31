import React from 'react'

export default function ProductTableItem(props) {
    return (
        <>
        <div className="row">
            <div className={props.header?("col bg-secondary"):("col")}>{props.name} </div>
            <div className={props.header?("col text-end bg-secondary"):("col text-end")}>{(Math.round(props.price*100)/100).toFixed(2)}</div>
        </div>
        </>
    )
}
