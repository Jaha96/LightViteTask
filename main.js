import './style.css'
import { merge } from './merge.js'


document.querySelector('#app').innerHTML = `
  <div id="app">
    <div class="table-row" id="row-1">
      <div class="table-col">1</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-2">
      <div class="table-col">2</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-3">
      <div class="table-col">3</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-4">
      <div class="table-col">4</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-5">
      <div class="table-col">5</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-6">
      <div class="table-col">6</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-7">
      <div class="table-col">7</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-8">
      <div class="table-col">8</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-9">
      <div class="table-col">9</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>

    <div class="table-row" id="row-10">
      <div class="table-col">10</div>
      <div class="table-col">
        <img class="img" src="/img.jpg" />
      </div>
      <div class="table-col">aaaa</div>
      <div class="table-col">bbbb</div>
      <div class="table-col">cccc</div>
      <div class="table-col">dddd</div>
      <div class="table-col">eeee</div>
      <div class="table-col">ffff</div>
    </div>
  </div>
`;




import arr1 from '/public/data1.tsv?raw'
import arr2 from '/public/data2.json'

// const arr = Object.keys(arr2).map((key) => [arr2[key]]);
// console.debug(arr1);
merge(arr1, arr2);

