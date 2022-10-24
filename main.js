import './style.css'
import { merge } from './merge.js'
import { generateTable} from './table.js'


document.querySelector('#app').innerHTML = `
  <div id="app">
    <div id="generatedTable">
    </div>
    <div>
      <span>Showing 
        <span id="current-data-count"></span> of 
        <span id="data-total"></span> rows      
      </span>
    </div>
  </div>
`;




import arr1 from '/public/data1.tsv?raw'
import arr2 from '/public/data2.json'

const data = merge(arr1, arr2);
generateTable(data)