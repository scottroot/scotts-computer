import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js";
import ChartDataSource from 'chartjs-plugin-datasource';

import myData  from './helpers/daily_tx.csv';


export default function Charts() {

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const row = d => {
    d.population = +d.population;
    return d;
  };

  const App = () => {
    const [data, setData] = React.useState([]);
    
    React.useEffect(() => {
      d3.csv('data.csv', row).then(setData);
    }, []);
    
    return (
      React__default.createElement( Victory.VictoryChart, {
        style: {tickLabels: {fontSize: 120}}, width: '960', height: '500', domainPadding: 50, padding: { top: 10, bottom: 40, left: 80, right: 10 } },
        React__default.createElement( Victory.VictoryBar, { data: data, x: "country", y: "population" })
      )
    );
  };

  const rootElement = document.getElementById('root');
  ReactDOM.render(React__default.createElement( App, null ), rootElement);

}(React,ReactDOM,d3,Victory);
