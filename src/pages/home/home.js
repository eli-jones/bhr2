import './home.css'

import { Calendar } from '../../components/calendar/calendar';
import { Feature } from '../../components/feature/feature';
import { Carousel } from '../../components/carousel/carousel';

const Home = () => {
    
    
    return (
        <div className='home'>
            <div className='welcome'>
                <div className='welcome-text'>
                    <h2>Welcome</h2>
                </div>
            </div>
            <div className='featured'>
                <h2>Featured Pets</h2>
                <Feature />
            </div>
            <div className='time-outer'>
                <div className='time-inner'>
                    <div className='calendar'>
                        <Calendar />
                    </div>
                    <div className='events'>
                        <h3>Events</h3>
                        <p>Nothing is scheduled at this time.</p>
                    </div>
                </div>
            </div>
            <div className='carousel'>
                <Carousel />
                <Carousel />
                <Carousel />
            </div>
        </div>
    )

}

export default Home;