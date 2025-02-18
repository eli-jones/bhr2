import './nav.css';

import React, { useState, useRef } from 'react';

import { menuItemsData } from '../menuItems/menuItemsData';
import { MenuItems } from '../menuItems/menuItems'

function Nav() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const navMenu = useRef(null);
    
    const closeMenuOpen = (e) => {
        if (menuOpen && !navMenu.current?.contains(e.target)) {
            setMenuOpen(false)
        }
    };
            
    document.addEventListener('mousedown', closeMenuOpen);
    document.addEventListener('touchstart', closeMenuOpen);
    
    return (
        <nav className='nav'>
            <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''} onClick={() => {setMenuOpen(false)}} ref={navMenu}>
                {menuItemsData.map((menu, index) => {
                    return (
                        <MenuItems items={menu} key={index} />
                    );
                })}
            </ul>
        </nav>
    )
}

export { Nav };