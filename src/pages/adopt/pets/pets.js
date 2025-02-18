import './pets.css';

import { Cards } from '../../../components/cards/cards';
import { SizeFilter } from '../../../components/filter/sizeFilter';
import { AgeFilter } from '../../../components/filter/ageFilter';
import { SexFilter } from '../../../components/filter/sexFilter';
import { petData } from '../../../assets/petData.js';

import React, { useState } from 'react';


const Pets = () => {
    
    const sizeCategories = ['All', ...new Set(petData.map(data => data.size))];
    const ageCategories = ['All', ...new Set(petData.map(data => data.age))];
    const sexCategories = ['All', ...new Set(petData.map(data => data.gender))];
    
    const [filterItem, setFilterItem] = useState(petData);
    const [sizeButton] = useState(sizeCategories);
    const [ageButton] = useState(ageCategories);
    const [sexButton] = useState(sexCategories);
    
    const handleSizeFilter = (sizeButton) => {
        
        if(sizeButton === 'All') {
            setFilterItem(petData);
            return;
        }
        
        const filteredData = petData.filter(data => data.size === sizeButton);
        setFilterItem(filteredData);
        
    }
    
    const handleAgeFilter = (ageButton) => {
        
        if(ageButton === 'All') {
            setFilterItem(petData);
            return;
        }
        
        const filteredData = petData.filter(data => data.age === ageButton);
        setFilterItem(filteredData);
        
    }  
    
    const handleSexFilter = (sexButton) => {
        
        if(sexButton === 'All') {
            setFilterItem(petData);
            return;
        }
        
        const filteredData = petData.filter(data => data.gender === sexButton);
        setFilterItem(filteredData);
        
    }  
    
    return (
        <div className='pets-page'>
            <div className='pets-cont'>
                <h2>Available Pets</h2>
                <div className='card-cont'>
                    <div className='filter-cont'>
                        <h4>Filter</h4>
                        <SizeFilter button={sizeButton} filter={handleSizeFilter} />
                        <AgeFilter button={ageButton} filter={handleAgeFilter} />
                        <SexFilter button={sexButton} filter={handleSexFilter} />
                    </div>
                    <div className='card-slots'>
                        <Cards filterItem={filterItem} />
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Pets;
