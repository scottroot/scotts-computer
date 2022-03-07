import React, { useState } from 'react';
import './Window.css';
import Draggable, {DraggableCore} from 'react-draggable';

function NewWindow(props) {
    const [visibility, setVisibility] = useState("visibility:flex;");
            
    const minHandler = () => {
        setVisibility("visibility:none;");
        console.log('changed to none.')
    };


const Search = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div>
      <input type="submit" value="Search" onClick={onClick} />
      { showResults ? <Results /> : null }
    </div>
  )
}

const Window = () => (
  <div id="results" className="search-results">
    Some Results
  </div>
)

ReactDOM.render(<Search />, document.querySelector("#container"))






    return (



            <Draggable
                handle="#window-handle"
                bounds="#main-wrapper"
                cancel=".winbtn"
            >

                <div className="window d-flex vstack" id="window" style={visibility}>
                    <div className="window-header d-flex" id="window-handle">
                            <div className="square_button winbtn" id="window-close"></div>
                            <div className='window-header-center flex-grow-1 mx-1'></div>
                            <div className="square_button_maximize winbtn d-block pr-5" id="window-max"></div>
                            <div className="vr"></div>
                            <div className="square_button_minimize winbtn" id="window-min" onClick={minHandler}></div>

                            <span className="window-header-title no-select" id="window-handle"><p>{props.windowTitle}</p></span>
                    </div>
                    <div className="window-content" id="window-content">
                        <div className="window-content-body">
                            <span className="d-md-block">
                            {props.windowBody}
                            </span> 
                        </div>
                    </div>
                </div>
        </Draggable>

    
);
}

export default NewWindow;