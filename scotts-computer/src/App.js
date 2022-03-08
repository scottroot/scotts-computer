import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import Desktop from './Components/Desktop';
import NewWindow from './Components/Window';
import Browser from './Components/Browser';
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';



function App (){
    const [readmeVisibility, setReadmeVisibility] = useState(true);
    const callbackHideWindow = () =>  setReadmeVisibility(false);
    const callbackShowWindow = () => setReadmeVisibility(true)

    const [browserVisibility, setBrowserVisibility] = useState(false);
    const callbackHideBrowser = () =>  setBrowserVisibility(false);
    const callbackShowBrowser = () => setBrowserVisibility(true)

    const [height, setHeight] = useState(1);
    const callbackTopZ = () => {
        setHeight(height+1);
    }
    return (
        <Container fluid className="vw-100 vh-100">

            <NavBar /> 

            <Desktop id="main-wrapper" callbackWindow={callbackShowWindow} callbackBrowser={callbackShowBrowser} height={height}/>

            {readmeVisibility && 
                <NewWindow 
                    callback={callbackHideWindow}
                    callbackTopZ={callbackTopZ}
                    topZ={height}
                    windowTitle="ReadMe"
                    windowBody=<div><h1>About Me</h1><p>I work as a technology consultant and in my part time like to develop web projects. Lately  these projects have been web based, as I have been studying various Web3 libraries and plan to begin working on a tool for use with the Arweave blockchain.</p></div>
                />
            }

            {browserVisibility && 
                <NewWindow 
                    callback={callbackHideBrowser}
                    callbackTopZ={callbackTopZ}
                    topZ={height}
                    id="browser-window"
                    windowTitle="Browser"
                    windowBody=<TwitterTimelineEmbed
                                  sourceType="profile"
                                  screenName="scottz_thoughtz"
                                  options={{width:600, id:"profile:scottz_thoughtz"}}
                                  noHeader
                                  noFooter
                                />
                />
            }
        </Container>
          
      
  );
}

export default App;
