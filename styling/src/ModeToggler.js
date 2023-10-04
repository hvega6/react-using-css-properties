import React, {useState} from 'react';


function ModeToggler(){
    let darkModeOn = false;
    const [darkMode, setDarkMode] = React.useState("Dark mode")
    const [lightMode, setLightMode] = React.useState("Light mode")


    function handleClick(){
        darkModeOn = !darkModeOn;
        if (darkModeOn === true){
            setLightMode({darkMode})
        } else {
            setDarkMode({lightMode})
        }
    }
    
    return(
        <div>
        {darkModeOn ? darkMode: lightMode}
        <button onClick={handleClick}>
            Click Me
        </button>
    </div>
    )
}

export default ModeToggler;