import React,{ useState }  from 'react';
import NewWindow from './Window';
import './Window.css';




function WindowReadme() {
    return (
        // <div>
      
            <NewWindow 
                windowTitle="ReadMe"
                windowBody=<div><h1>About Me</h1></div>
            />
        // </div>
    );
}

export default WindowReadme;