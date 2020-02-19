import React from 'react'
import {Link} from 'react-router-dom'

export default function CartButton() {
    return (
        <Link to ="/">
            <button className="cart-button button">Go Back</button>
        </Link>
    )
}
