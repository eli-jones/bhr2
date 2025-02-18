import './details.css';
import 'swiper/css';
import 'swiper/css/navigation';
import tempPic from '../../../images/no-profile-image.jpg';
import medFalse from '../../../images/medical-n-icon.png';
import medTrue from '../../../images/medical-y-icon.png';

import { petData } from '../../../assets/petData.js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const Details = () => {
    
    const {petId} = useParams();
    
    let pairId = petData[petId].pairId;
    
    const medRender = () => {
        if (petData[petId].medical) {
            return Array.isArray(petData[petId].moreMedical) ? (
                <div className='med-true'>
                    <img src={medTrue} alt='Blue heart icon showing there are medical needs' />
                    <p>{petData[petId].moreMedical[0]}</p>
                    <p>{petData[petId].moreMedical[1]}</p>
                    <p>{petData[petId].moreMedical[2]}</p>
                    <p>{petData[petId].moreMedical[3]}</p>
                </div>
            ) : (
                <div className='med-true'>
                    <img src={medTrue} alt='Blue heart icon showing there are medical needs' />
                    <p>{petData[petId].moreMedical}</p>
                </div>
            );
        } else {
            return (
                <div className='med-false'>
                    <img src={medFalse} alt='Gray heart icon showing no medical needs' />
                    <p>No medical needs</p>
                </div>
            )
        }
    }
        
    return (
        <div className='details-page'>
            <div className='details-content'>
                <div className='photo-reel'>
                    <Swiper
                        lazy={false}
                        navigation={true}
                        modules={[Navigation]}
                        className='pet-swiper'
                    >
                        <SwiperSlide>
                            <img src={petData[petId].image || tempPic} alt='pet profile 1' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tempPic} alt='pet profile 1' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Link to='/*'><button>I'm interested!</button></Link>
                <div className='pet-desc'>
                    <h3>{petData[petId].name || 'Not found'}</h3>
                    <div className='first-desc'>
                        <p><strong>Age </strong>{petData[petId].age || 'Not found'}</p>
                        <p><strong>Sex</strong>{petData[petId].gender || 'Not found'}</p>
                    </div>
                    <div className='sec-desc'>
                        <p><strong>Breed </strong>{petData[petId].breed || 'Not found'}</p>
                        <p><strong>Size</strong>{petData[petId].size || 'Not found'}</p>
                    </div>    
                </div>
                <div className='pet-other sep'>
                    <h4>Extra Needs</h4>
                    <div className='pet-med'>
                        {medRender()}
                    </div>
                    <div className='pet-pair'>
                        {petData[petId].pair ?
                            <>
                            <p>I don't come alone! Please also check out my friend: <Link to={`/pets/${pairId}`}>{petData[pairId].name}</Link></p>
                            <Link to={`/pets/${pairId}`}><img src={petData[pairId].image || tempPic} alt={petData[pairId].imageAlt || 'Default profile pic'} /></Link>
                            </>
                        :
                            null
                        }
                    </div>
                </div>
                <div className='pet-pers sep'>
                    <h4>Get to Know Me</h4>
                    <div className='pet-bio'>
                        <p>{petData[petId].bio}</p>
                    </div>
                    <div className='pet-temp'>
                        <h5>How am I with others?</h5>
                        <p><strong>Kids </strong>{petData[petId].kidTemp || 'Unknown/Untested'}</p>
                        <p><strong>Cats </strong>{petData[petId].catTemp || 'Unknown/Untested'}</p>
                        <p><strong>Other Dogs </strong>{petData[petId].dogTemp || 'Unknown/Untested'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Details;