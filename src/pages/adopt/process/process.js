import './process.css';
import processPup from '../../../images/dog-laying-in-grass.jpg';
import { Link } from 'react-router-dom';
import React from 'react';

const Process = () => {
    
    return (
        <div className='page'>
            <div className='process'>
                <img src={processPup} className='banner' alt='a black and white border collie lays in a field of long, brown grass'/>
                <h2>So, what does our adoption process look like?</h2>
                <p>First, please fill out an application to adopt, available <span className='link-text'><Link to='#'>here</Link></span>. If there is a dog available, you can indicate that on your application. If you would like to be considered in the future as animals become available, please make sure to fill out the preferences portion of the application.</p>
                <p>Once we receive an application, we will review it and either mark it as acceptable or reach out to you if there are any issues. If the dog you were interested in is still available, or if you like a dog we recommend to you, we will schedule a time to meet with the dog.</p>
                <p>If all goes well, we will schedule a home visit (which typically takes 15 to 30 minutes). During this time, we will ensure your home is safe for the animal and help to address any concerns (like if the dog likes to chase squirrels and you don’t have a fenced yard).</p>
                <p>Once that is complete, we will then schedule a time to bring the dog to you. We will help let you know what to do with any other pets, introduce the dog to your home, and allow you to welcome your new family member!</p>
                <Link to='/pets'><button>Let's look at available pets</button></Link>
            </div>
        </div>
    )
    
};

export default Process;