import JSSoup from 'jssoup';

var soup = new JSSoup();


const getHTML = require('html-get')

ReactDOM.render(
  return
  <React.StrictMode>
    // <App />
    getHTML('https://etherscan.io/chart/tx').then(
  ({ url, html, stats, headers, statusCode }) =>
    console.log(`
       url: ${url}
      html: ${Buffer.from(html).byteLength} bytes (HTTP ${statusCode})
      time: ${stats.timing} (${stats.mode})
   headers: ${Object.keys(headers).reduce(
     (acc, key) => `${acc}${key}=${headers[key]} `,
     ''
   )}
`))