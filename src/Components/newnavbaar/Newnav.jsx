import React from 'react'
import './newnav.css'

const Newnav = () => {
    return (
        <div className='new_nav'>
            <div className='nav_data'>
                <div className='left_data'>
                    <p>All</p>
                    <p>Mobile</p>
                    <p>Bestseller</p>
                    <p>Fashion</p>
                    <p>Customer Services</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Today's deals</p>
                    <p>Amazon Pay</p>
                </div>
                <div className='right_data'>
                    <img src={require("../Images/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg")} alt='navata' />
                </div>
            </div>

        </div>
    )
}

// 27.37
export default Newnav
