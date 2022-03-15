import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { usePapaParse } from 'react-papaparse';
import { Line } from "react-chartjs-2";
import myData from './helpers/daily_tx.csv';
import './Charts.css';

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
plugins,
Tooltip,
Legend,
} from 'chart.js';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
plugins,
Tooltip,
Legend
);

const labelNames = ['Ethereum','BSC','Polygon','Fantom','Heco','Hoo','Optimism','Moon','Moonriver','Crono'];

function Charts() {
	const [csvText, setCsvText] = useState([]);
	const [parsedCsvData, setParsedCsvData] = useState([]);
	const { readString } = usePapaParse();
	useEffect( () => { 
		
		Axios(myData)
		.then(res => {
			setCsvText(res.data); 
			readString(res.data, {
				worker: true,
				complete: (results) => setParsedCsvData(results["data"]),
		  		header: true,
		  		dynamicTyping: true
			})
		}); 
	}, []);

	var DATE = [];
	var ETHEREUM = [];
	var BSC = [];
	var POLYGON = [];
	var FANTOM = [];
	var HECO = [];
	var HOO = [];
	var OPTIMISM = [];
	var MOON = [];
	var MOONRIVER = [];
	var CRONO = [];
	if(parsedCsvData.length > 0){
		console.log("------parsedCsvData--------");
		console.log(parsedCsvData);
		// for (let key of Object.entries(parsedCsvData)) {
		// 	console.log(key[1]["Dates"]);
		// 	// console.log(`${key}`);
		// }	
		for (let key of Object.entries(parsedCsvData)) {
			if(key[1]["DateUTC"]){
				DATE.push(key[1]["DateUTC"]);
				ETHEREUM.push(key[1]["Ethereum"]);
				BSC.push(key[1]["BSC"]);
				POLYGON.push(key[1]["Polygon"]);
				FANTOM.push(key[1]["Fantom"]);
				HECO.push(key[1]["Heco"]);
				HOO.push(key[1]["Hoo"]);
				OPTIMISM.push(key[1]["Optimism"]);
				MOON.push(key[1]["Moon"]);
				MOONRIVER.push(key[1]["Moonriver"]);
				CRONO.push(key[1]["Crono"]);
			}
		}
	};


	const data = {
	  	labels: DATE,
	  	datasets: [
	    	{
	    	label: labelNames[0],
	    	data: ETHEREUM,
	    	fill: false,
	    	borderColor: "#3c3c3d"
	    	},
	    	{
	    	label: labelNames[1],
	    	data: BSC,
	    	fill: false,
	    	hidden: true,
	    	borderColor: "#F0B90B"
	    	},
	    	{
	    	label: labelNames[2],
	    	data: POLYGON,
	    	fill: false,
	    	borderColor: "#8247e5"
	    	},
	    	{
	    	label: labelNames[3],
	    	data: FANTOM,
	    	fill: false,
	    	borderColor: "#12AFE5"
	    	},
	    	{
	    	label: labelNames[4],
	    	data: HECO,
	    	hidden: true,
	    	fill: false,
	    	borderColor: "#"
	    	},
	    	{
	    	label: labelNames[6],
	    	data: OPTIMISM,
	    	hidden: true,
	    	fill: false,
	    	borderColor: "#742774"
	    	},
	  	]
	};

	const chartOptions = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			title: {
                display: true,
                text: "EVM Daily TX Volume",
                color: "#212529",
                font: {
                	family: "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                	size: "40px",
                	weight: "500"
                }
            },
            subtitle: {
                display: true,
                text: ["","scotts.computer", "Source: etherscan, bscscan, ftmscan, polygonscan, hecoscan, optimistic.etherscan"],
                position: "bottom",
                align: "center",
                font: {
                	family: "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                	color: "#212529",
	                },
	            },
    	},
	}

  	return (
	  	<>
	  		
	  		<div class="chart-container"><Line data={data} options={chartOptions} /></div>

  		</>
	)
}




export default Charts