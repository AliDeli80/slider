import React from "react";


export default function CradItem({ type, children }) {
    return (
        <div className={type}>{children}</div>
    )
}