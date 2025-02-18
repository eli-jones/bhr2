import './notFound.css';
import dogWalk from '../../images/dog-walking.gif';
 
import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    };
    
    return (
        <div className='no-page'>
            <div className='image'>
                <img src={dogWalk} alt='animated lineart of person walking dog'/>
            </div>
            <div className='no-page-text'>
                <h3>Oops! Looks like we've gotten a bit lost.</h3>
                <p>Let's head back <span className='link-text'><Link to='/'>home</Link></span>. Or go <span className='link-text' onClick={() => goBack()}>back</span>.</p>
                <p className='source'>Image provided by <a href='https://www.flaticon.com/free-animated-icon/dog-walking_16677982'>Freepik</a></p>
            </div>
        </div>
    );
};
 
export default PageNotFound;