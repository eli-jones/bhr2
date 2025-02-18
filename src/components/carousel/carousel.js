import './carousel.css';
import processPup from '../../images/dog-laying-in-grass.jpg';
import volunteerImg from '../../images/volunteer-with-pup.png';
import donateImg from '../../images/pup-doing-tricks.jpg';
import geronimoImg from '../../images/geronimo.jpg';
import aboutImg from '../../images/pup-running.jpg';

function Carousel() {
    
   
    return (
        <div className='slider-inner'>
            <div className='slider-image'>
                <img src={processPup} alt='border collie' className='bc-pic' />
            </div>
            <div className='slider-image'>
                <img src={donateImg} alt='woman with dog' />
            </div>
            <div className='slider-image'>
                <img src={geronimoImg} alt='yellow dog' className='g-pic' />
            </div>
            <div className='slider-image'>
                <img src={aboutImg} alt='dog running with ball' />
            </div>
            <div className='slider-image'>
                <img src={volunteerImg} alt='man with dog' />
            </div>
            <div className='slider-image'>
                <img src={processPup} alt='border collie' className='bc-pic' />
            </div>
            <div className='slider-image'>
                <img src={donateImg} alt='woman with dog' />
            </div>
            <div className='slider-image'>
                <img src={geronimoImg} alt='yellow dog' className='g-pic' />
            </div>
            <div className='slider-image'>
                <img src={aboutImg} alt='dog running with ball' />
            </div>
            <div className='slider-image'>
                <img src={volunteerImg} alt='man with dog' />
            </div>
            <div className='slider-image'>
                <img src={processPup} alt='border collie' className='bc-pic' />
            </div>
            <div className='slider-image'>
                <img src={donateImg} alt='woman with dog' />
            </div>
            <div className='slider-image'>
                <img src={geronimoImg} alt='yellow dog' className='g-pic' />
            </div>
            <div className='slider-image'>
                <img src={aboutImg} alt='dog running with ball' />
            </div>
            <div className='slider-image'>
                <img src={volunteerImg} alt='man with dog' />
            </div>
        </div>
    )
}

export { Carousel };