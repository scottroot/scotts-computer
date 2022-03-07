import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import Desktop from './Components/Desktop';
import NewWindow from './Components/Window';
import WindowReadme from './Components/WindowReadme';


function App (){
    const [visibility, setVisibility] = useState(true);
    const callbackHideWindow = () =>  setVisibility(false);
    const callbackShowWindow = () => setVisibility(true)


    return (
        <Container fluid className="vw-100 vh-100">
            <NavBar /> 
            <Desktop id="main-wrapper" callback={callbackShowWindow}/>
            {visibility && 
            <NewWindow 
                    callback={callbackHideWindow}
                    windowTitle="ReadMe"
                    windowBody=<div><h1>About Me</h1><p>I work as a technology consultant and in my part time like to develop web projects. Lately  these projects have been web based, as I have been studying various Web3 libraries and plan to begin working on a tool for use with the Arweave blockchain.</p></div>

            />
            }

        </Container>
          
      
  );
}

export default App;
