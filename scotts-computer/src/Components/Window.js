import React,{ useState }  from 'react';
import './Window.css';
import Draggable from 'react-draggable';


function NewWindow(props) {
    const [minimize, setMinimize] = useState(false)
    const [windowStyle, setWindowStyle] = useState("window")
    console.log("window.js " + props.currentZHeight)
    const closeWindow = () => {
        props.callback(); 
        setMinimize(false);
        setWindowStyle("window");
    }
    const minimizeWindow = () => {
        {minimize ? setMinimize(false) : setMinimize(true)};
    }

    const maximizeWindow = () => {
        {windowStyle=="window" ? setWindowStyle("window-maximized") : setWindowStyle("window")};
        setMinimize(false);
    }

    const [height, setHeight] = useState(1)
    const onClickWindows = () => {
        setHeight(props.topZ);
        props.callbackTopZ();
    };
    
    
    const nodeRef = React.useRef(null);
    return (      
                <Draggable nodeRef={nodeRef}
                    handle="#window-handle"
                    bounds="parent"
                    cancel=".winbtn"
                    onMouseDown={onClickWindows}
                    >                    
                    <div className={windowStyle + " d-flex vstack"} id="window" ref={nodeRef} style={{zIndex: height}}>
                        <div className="window-header d-flex" id="window-handle" onDoubleClick={()=>{windowStyle=="window" ? setWindowStyle("window-maximized") : setWindowStyle("window")}}>
                            <div className="square_button winbtn" id="window-close" onClick={closeWindow}></div>
                            <div className='window-header-center flex-grow-1 mx-1'></div>
                            <div className="square_button_maximize winbtn d-block pr-5" id="window-max" onClick={maximizeWindow}></div>
                            <div className="vr"></div>
                            <div className="square_button_minimize winbtn" id="window-min" onClick={minimizeWindow}></div>

                            <span className="window-header-title no-select" id="window-handle">
                                <p>{props.windowTitle}</p>
                            </span>
                        </div>
                        {!minimize &&
                            <div className="window-content" id="window-content">
                                <div className="window-content-body" id={props.id}>
                                    <span className="d-md-block">
                                        {props.windowBody}
                                    </span> 
                                </div>
                            </div>
                        }
                    </div>
                </Draggable>
      );
    }


export default NewWindow;







