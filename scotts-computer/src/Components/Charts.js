import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { usePapaParse } from 'react-papaparse';
import { Line } from "react-chartjs-2";
import myData from './helpers/daily_tx.csv';



const labels = ['Dates','Ethereum','BSC','Polygon','Fantom','Heco','Hoo','Optimism','Moon','Moonriver','Crono'];

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


	if(parsedCsvData.length > 0){
		console.log("------parsedCsvData--------");
		console.log(parsedCsvData);
		for (let key of Object.entries(parsedCsvData)) {
			console.log(key[1]["Dates"]);
			// console.log(`${key}`);
		}	
	};



  	return (
	  	<>
	  		<h1>test</h1>
	  		
  		</>
	)
}




export default Charts