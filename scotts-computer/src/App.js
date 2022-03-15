import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import Desktop from './Components/Desktop';
import NewWindow from './Components/Window';
import Browser from './Components/Browser';
import Charts from './Components/Charts';
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function App (){
    const [contactVisibility, setContactVisibility] = useState(false);
    const callbackHideContact = () =>  setContactVisibility(false);
    const callbackShowContact = () => setContactVisibility(true)

    const [readmeVisibility, setReadmeVisibility] = useState(true);
    const callbackHideWindow = () =>  setReadmeVisibility(false);
    const callbackShowWindow = () => setReadmeVisibility(true)

    const [browserVisibility, setBrowserVisibility] = useState(false);
    const callbackHideBrowser = () =>  setBrowserVisibility(false);
    const callbackShowBrowser = () => setBrowserVisibility(true)

    const [chartsVisibility, setChartsVisibility] = useState(false);
    const callbackHideCharts = () =>  setChartsVisibility(false);
    const callbackShowCharts = () => setChartsVisibility(true)

    const [height, setHeight] = useState(1);
    const callbackTopZ = () => {
        setHeight(height+1);
    }
    return (
        <Container fluid className="vw-100 vh-100">

            <NavBar /> 

            <Desktop id="main-wrapper" 
                callbackWindow={callbackShowWindow} 
                callbackBrowser={callbackShowBrowser} 
                callbackCharts={callbackShowCharts}
                callbackContact={callbackShowContact}
                height={height}/>

            {contactVisibility && 
                <NewWindow 
                    callback={callbackHideContact}
                    callbackTopZ={callbackTopZ}
                    topZ={height}
                    windowTitle="Contact"
                    windowBody=<div><h1>Contact Me</h1><p>@scottz_thoughtz</p><p>@scottz_thoughtz</p></div>
                />
            }

            {readmeVisibility && 
                <NewWindow 
                    callback={callbackHideWindow}
                    callbackTopZ={callbackTopZ}
                    topZ={height}
                    windowTitle="ReadMe"
                    windowBody=<div><h1>About Me</h1><p>I work as a technology consultant and in my part time work on development projects. Lately these projects have been web based with ReactJS to get more familiar with the many Web3 libraries available. Future plans include a POA usecase built on top of the Arweave blockchain.</p></div>
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

            {chartsVisibility && 
                <NewWindow 
                    callback={callbackHideCharts}
                    callbackTopZ={callbackTopZ}
                    topZ={height}
                    id="charts-window"
                    classMain="charts-window-main"
                    windowTitle="Charts"
                    windowBody=<Charts />
                />
            }
        </Container>
          
      
  );
}

export default App;
