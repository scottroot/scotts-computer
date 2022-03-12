import { useState, useEffect } from 'react';
import myData  from './daily_tx.csv';

export default function ReadCSV() {
    // const [csvFile, setCsvFile] = useState(myData);
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]
    console.warn();
    const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            // console.log(row);
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
                console.log(obj)
            }, {})
            return eachObject;
        })

        setCsvArray(newArray)
    }

    // const readFile = () => {
    //  fetch(csvFile)
    //     const file = csvFile;
    //     const reader = new FileReader();

    //     reader.onload = function(event) {
    //         const text = event.target.result;
    //         console.log(text);
    //         // processCSV(text)
    //     }

    //     reader.readAsText(file);
    // }



    // readFile();
    const [csvData, setCsvData] = useState(myData);
    useEffect(() => { 
            fetch(myData)
            .then(r => r.text())
            .then(text => {
                // console.log('text decoded:', text);
                // setCsvData(processCSV(text));
                processCSV(text);
            })
    })
    console.log(csvArray);
    return(
            // {csvArray.length>0 ? "output" : null}
            <div>

            {csvArray.length>0 ? 
            <>
                <table>
                    <thead>
                        <tr><th>Dates</th>
                        <th>Ethereum</th>
                        <th>BSC</th>
                        <th>Polygon</th>
                        <th>Fantom</th>
                        <th>Heco</th>
                        <th>Hoo</th>
                        <th>Optimism</th>
                        <th>Moon</th>
                        <th>Moonriver</th>
                        <th>Crono</th></tr>
                    </thead>
                    <tbody>
                        {
                            csvArray.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.Dates}</td>
                                    <td>{item.Ethereum}</td>
                                    <td>{item.BSC}</td>
                                    <td>{item.Polygon}</td>
                                    <td>{item.Fantom}</td>
                                    <td>{item.Heco}</td>
                                    <td>{item.Hoo}</td>
                                    <td>{item.Optimism}</td>
                                    <td>{item.Moon}</td>
                                    <td>{item.Moonriver}</td>
                                    <td>{item.Crono}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </> : null}



            </div>

    );

}