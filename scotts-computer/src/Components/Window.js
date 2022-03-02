import './Window.css';

function NewWindow(props) {
    return (
            <div className="window d-flex vstack" id="window-readme">
        <div className="window-header d-flex" id="readme-handle">
                <btn className="square_button" id="window-readme-close"></btn>
                <div className='window-header-center flex-grow-1 mx-1'></div>
                <btn className="square_button_maximize d-block pr-5" id="window-readme-max"></btn>
                <div className="vr"></div>
                <btn className="square_button_minimize" id="window-readme-min"></btn>

                <span className="window-header-title no-select" id="readme-handle"><p>{props.windowTitle}</p></span>
        </div>
        <div className="window-content" id="window-content-readme">
            <div className="window-content-body">
                <span className="d-md-block">
                {props.windowBody}
                </span> 
            </div>
        </div>
    </div>
    
);
}

export default NewWindow;