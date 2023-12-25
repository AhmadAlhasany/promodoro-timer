import React from 'react'

function Settings({value, setValue, setSettings}) {
  return (
    <div className='sCon'>
        <div className='header'>
            <h1>Settings</h1>
            <button onClick = {() => {setSettings(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <h2>{value} minute{value > 1 ? 's' : ''}</h2>
        <input type='range' min = {0.5} max = {99} step={0.5} value= {value} onChange={(event) =>{console.log(event.target.value) ;setValue(event.target.value)}}/>
    </div>
  )
}

export default Settings