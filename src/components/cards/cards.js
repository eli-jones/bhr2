import './cards.css';
import tempPic from '../../images/no-profile-image.jpg';

import { Link } from 'react-router-dom';

function Cards({ filterItem }) {
    
    
    return (
        <div className='cards'>
            {filterItem.map(pet =>
                <Link
                    to={`/pets/${pet.id}`}
                    className='card-link'
                >
                    <div className='card'>
                        <div className='card-image'>
                            <img src={pet.image || tempPic} alt={pet.alt || 'default profile pic'}/>
                        </div>
                        <div className='card-text'>
                            <h4>{pet.name}</h4>
                            <p>{pet.breed}</p>
                            <p>{pet.age}</p>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export { Cards };