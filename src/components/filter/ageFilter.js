import './filter.css';

function AgeFilter({ button, filter }) {
    
   
    return (
        <div className='filter'>
            <div className='gen-filter'>
                <h5>Age</h5>
                {
                    button.map((age, i) => {
                        return <button type='button' onClick={() => filter(age)}>{age}</button>
                    })
                }
            </div>

            <div className='items-cont'>
    
            </div>
        </div>
    )
}

export { AgeFilter };