import './Window.css';
import Draggable, {DraggableCore} from 'react-draggable';

function NewWindow(props) {
    return (
        // <div className="row align-items-center">
            // <div className="col-8 d-inline">
            <Draggable
                handle="#window-handle"
                bounds="#main-wrapper"
                cancel=".winbtn"
                // defaultPosition={{x: 50, y: 25}}
            >

                <div className="window d-flex vstack" id="window">
                    <div className="window-header d-flex" id="window-handle">
                            <div className="square_button winbtn" id="window-close"></div>
                            <div className='window-header-center flex-grow-1 mx-1'></div>
                            <div className="square_button_maximize winbtn d-block pr-5" id="window-max"></div>
                            <div className="vr"></div>
                            <div className="square_button_minimize winbtn" id="window-min"></div>

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