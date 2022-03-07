import React,{ Component, useState }  from 'react';
import './Window.css';
import Draggable, {DraggableCore} from 'react-draggable';

const nodeRef = React.useRef(null);

class NewWindow extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            windowVisibility: "windowShow",
            windowMinimize: "windowShow"
        };
        this.clickCloseHandler.bind(this);
    }
// function NewWindow(props) {
     // const [windowVisibility, setWindowVisibility] = React.useState("windowShow");
     // const [windowMinimize, setWindowMinimize] = React.useState("windowShow");

    // console.log("window visibility");
    clickCloseHandler = () => {
        // setWindowVisibility("windowHide");
        this.props.setStateOfParent("windowHide");
        this.props.windowVisibility("windowHide");
        console.log("test");
    };

    render() {
    return (       
                <Draggable nodeRef={nodeRef}
                        handle="#window-handle"
                        bounds="#main-wrapper"
                        cancel=".winbtn"
                    >                    
                        <div className="window d-flex vstack" id="window" ref={nodeRef}>
                            <div className="window-header d-flex" id="window-handle">
                                    <div className="square_button winbtn" id="window-close" 
                                        onClick={() => this.closeWindow}></div>
                                    <div className='window-header-center flex-grow-1 mx-1'></div>
                                    <div className="square_button_maximize winbtn d-block pr-5" id="window-max" 
                                            onClick={() => this.setState({ windowMinimize: "windowShow" })}></div>
                                    <div className="vr"></div>
                                    <div className="square_button_minimize winbtn" id="window-min" 
                                            onClick={() => this.setState({ windowMinimize: "windowHide" })}></div>

                                    <span className="window-header-title no-select" id="window-handle"><p>{this.props.windowTitle}</p></span>
                            </div>
                            <div className={this.state.windowMinimize}>
                            <div className="window-content" id="window-content">
                                <div className="window-content-body">
                                    <span className="d-md-block">
                                    {this.props.windowBody}
                                    </span> 
                                </div>
                            </div>
                            </div>
                        </div>
                </Draggable>
      );
    }
}


export default NewWindow;







