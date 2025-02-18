import './feature.css';
import tempPic from '../../images/no-profile-image.jpg';
import { petData } from '../../assets/petData.js';

import { Link } from 'react-router-dom';

function Feature() {
        
    let randomPick1 = 4;
    let randomPick2 = 2;
    let randomPick3 = 0;
    
    return (
        <div className='feature-cont'>
            <Link
                to={`/pets/${petData[randomPick1].id}`}
                className='card-link'
            >
                <div className='card feat one'>
                    <div className='card-image'>
                        <img src={petData[randomPick1].image || tempPic} alt={petData[randomPick1].alt || 'default profile pic'}/>
                    </div>
                    <div className='card-text'>
                        <h4>{petData[randomPick1].name}</h4>
                        <p>{petData[randomPick1].breed}</p>
                        <p>{petData[randomPick1].age}</p>
                    </div>
                </div>
            </Link>
            <Link
                to={`/pets/${petData[randomPick2].id}`}
                className='card-link'
            >
                <div className='card feat two'>
                    <div className='card-image'>
                        <img src={petData[randomPick2].image || tempPic} alt={petData[randomPick2].alt || 'default profile pic'}/>
                    </div>
                    <div className='card-text'>
                        <h4>{petData[randomPick2].name}</h4>
                        <p>{petData[randomPick2].breed}</p>
                        <p>{petData[randomPick2].age}</p>
                    </div>
                </div>
            </Link>
            <Link
                to={`/pets/${petData[randomPick3].id}`}
                className='card-link'
            >
                <div className='card feat three'>
                    <div className='card-image'>
                        <img src={petData[randomPick3].image || tempPic} alt={petData[randomPick3].alt || 'default profile pic'}/>
                    </div>
                    <div className='card-text'>
                        <h4>{petData[randomPick3].name}</h4>
                        <p>{petData[randomPick3].breed}</p>
                        <p>{petData[randomPick3].age}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { Feature };