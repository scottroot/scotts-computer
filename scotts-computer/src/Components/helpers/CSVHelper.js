// import { useCSVReader } from 'react-papaparse';


// function CSVHelper(props) {
// 	const CSVReader = () => {
// 		useCSVReader();
// 	}
// 	const myFileURL = './daily_tx.csv';

//   	return (
//   		<div><CSVReader /></div>
		  	
// 	);}

// export default CSVHelper

// ----------------
// import React, { useState } from 'react';

import { usePapaParse } from 'react-papaparse';


function HandleReadString ({csvString}) {
	const { readString } = usePapaParse();

	console.log("csvString = "+csvString)
	readString(csvString, {
        worker: true,
        header: true,
        complete: (results) => {
			console.log('---------------------------');
			console.log(results);
			// setCsvRead(results)
			console.log('---------------------------');
    	},
  	});

  	  return <div></div>
};


export default HandleReadString