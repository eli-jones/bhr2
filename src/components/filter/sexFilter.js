import './filter.css';

function SexFilter({ button, filter }) {
    
   
    return (
        <div className='filter'>
            <div className='gen-filter'>
                <h5>Sex</h5>
                {
                    button.map((sex, i) => {
                        return <button type='button' onClick={() => filter(sex)}>{sex}</button>
                    })
                }
            </div>

            <div className='items-cont'>
    
            </div>
        </div>
    )
}

export { SexFilter };