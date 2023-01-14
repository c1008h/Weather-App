import React, {useState} from 'react'

export default function SearchForm ({onSubmit}) {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userInput);
        setUserInput('')
    }

    return (
        <div className="col-12 col-md-4" id="left-side">
            <div className="col" id="search-side">    
                <h3 className="col"><strong>Search for a City:</strong></h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={e => setUserInput(e.target.value)}
                        value={userInput}
                        name="search"
                        id="search" 
                        type="text" 
                        className="form-control m-1" 
                    />
                    <button type="submit" id="searchBtn" 
                        className="col-12 btn btn-outline-primary m-2">
                        Search
                    </button>
                </form>
                
                <div className='col-12' id="border-bottom"></div>
                <div className="col-12" id="history">
            </div>
            </div>
        </div>
    )
}