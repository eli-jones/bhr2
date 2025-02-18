import './header.css';
import bhrLogo from '../../images/bhr-logo.png';

import { Nav } from '../nav/nav';

import { Link } from 'react-router-dom';

function Header() {
    
    return (
        <div className='header'>            
            <h1>Big Hearts Rescue</h1>
            <Link to='/'><img src={bhrLogo} alt='Big Hearts Rescue Logo' /></Link>
            <Nav />
        </div>
    )
}

export { Header };