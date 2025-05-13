import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return ( <>
   
        <nav>
            <div className='header-div'>
            <div className='header-menu'><Link to ="/Length" className={({isActive}) => isActive ? 'active':''}>Length</Link></div>
            <div className='header-menu'><Link to ="/Area" className={({isActive}) => isActive? 'active':''}>Area</Link></div>
            <div className='header-menu'><Link to ="/Weight" className={({isActive}) => isActive? 'active':''}>Weight</Link></div>
            <div className='header-menu'><Link to ="/Time" className={({isActive}) => isActive? 'active':''}>Time</Link></div>
            </div>
        </nav>     
   
    </> );
}

export default Header;