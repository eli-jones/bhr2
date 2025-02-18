import './filter.css';

function SizeFilter({ button, filter }) {
    
   
    return (
        <div className='filter'>
            <div className='gen-filter'>
                <h5>Size</h5>
                {
                    button.map((size, i) => {
                        return <button type='button' onClick={() => filter(size)}>{size}</button>
                    })
                }
            </div>

            <div className='items-cont'>
    
            </div>
        </div>
    )
}

export { SizeFilter };