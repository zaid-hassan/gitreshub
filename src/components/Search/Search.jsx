import React from 'react'

function Search({inputValue, setInputValue, onSearch}) {
    // const inputID = useId();

    const handelSubmit = (e) => {
        e.preventDefault();
        onSearch()
    }
    const handleInput = (e) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);
    }
    return (
        <div className="">
            <form className='space-x-4' onSubmit={handelSubmit}>
                {/* <label htmlFor={inputID}>Search Github:</label> */}
                <input
                    // id={inputID}
                    type="text"
                    placeholder='Search GitHub'
                    value={inputValue}
                    className='w-44 outline-none border-b-2 border-blue-500 p-1'
                    onChange={handleInput}
                />
                <button className='bg-blue-500 hover:bg-blue-600 border-transparent outline-transparent rounded-lg px-4 py-2 text-sm text-white'>Search</button>
            </form>
        </div>
    )
}

export default Search