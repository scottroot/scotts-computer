import './Desktop.css';
import dt_contact from '../img/dt_contact.png';
import dt_browser from '../img/dt_browser.png';
import dt_readme from '../img/dt_readme.png';
import dt_charts from '../img/dt_charts.png';



function Desktop(props) {
		return (
			<div className="desktop flex-column" > 
	        	<div className="desktop_icons no-select" id="open-browser-window" tabIndex="0" onDoubleClick={props.callbackCharts}>
	        		<span>
	                	<img src={dt_contact} alt="" height="50px" />
	            		<p>Contact</p>
	            	</span>
	        	</div>


	        	<div className="desktop_icons no-select" id="open-browser-window" tabIndex="1" onDoubleClick={props.callbackBrowser}>
	                <span>
	                <img src={dt_browser} alt="" height="50px" />
	            	<p>Browser</p>
	            	</span>
	        	</div>


	        	<div className="desktop_icons no-select" id="open-readme-window" tabIndex="2" onDoubleClick={props.callbackWindow}>
	                <span>
	                	<img src={dt_readme} alt="" height="50px" />
	            		<p>ReadMe</p>
	            	</span>
	        	</div>

	        	<div className="desktop_icons no-select" id="open-charts-window" tabIndex="3" onDoubleClick={props.callbackCharts}>
	                <span>
	                	<img src={dt_charts} alt="" height="50px" />
	            		<p>Charts</p>
	            	</span>
	        	</div>

        	</div>

		)}

export default Desktop;