import { useRef } from 'react';
import { Link } from 'react-router-dom';

function MenuItems({ items }) {
    
    let ref = useRef();
        
    return (
        <li className='menu-items'
            ref={ref}
        
        >
            <Link to={items.url}>{items.title}</Link>
        </li>
    )
}

export { MenuItems };