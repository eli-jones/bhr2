import './footer.css';

import { Link } from 'react-router-dom';

function Footer() {
    
    return (
        <div className='footer'>            
            <div className='footer-cont'>
                <div className='contact'>            
                    <h5>Contact</h5>
                    <p>(000) 000 - 0000 </p>
                    <p>email@fakeemail.com</p>
                    <p>123 Address Street,<br />Loveland, CO 80523</p>
                </div>
                <div className='map'>            
                    <h5>Site Map</h5>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='about'><p>About</p></Link>
                    <Link to='process'><p>Adoption Process</p></Link>
                    <Link to='pets'><p>Available Pets</p></Link>
                    <Link to='help'><p>How to Help</p></Link>
                </div>
            </div>
        </div>
    )
}

export { Footer };