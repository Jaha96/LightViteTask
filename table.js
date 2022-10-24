let CURRENT_PAGE = 1;
let API_DATA;
let DATA_LIMIT;
let PAGE_COUNT;
const DISPLAY_SIZE = 10;
let DATA_COUNT_ELEM;
let DATA_TOTAL_ELEM;

export function generateTable(data){
    DATA_COUNT_ELEM = document.getElementById("current-data-count");
    DATA_TOTAL_ELEM = document.getElementById("data-total");

    API_DATA = data;
    DATA_LIMIT = data.length;
    PAGE_COUNT = Math.ceil(DATA_LIMIT / DISPLAY_SIZE)
    DATA_TOTAL_ELEM.innerHTML = DATA_LIMIT;

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // Create table header
    const headers = ["No", "Image",  "Name", "Theme", "Type", "Cost", "Estimated Customers", "Maintenance Time", "Workers Required", "Updated"]
    const row = document.createElement("tr");
    row.className = "table-row";
    for (let i = 0; i < headers.length; i++) {
        const cell = document.createElement("th");
        cell.appendChild(document.createTextNode(headers[i]));
        cell.className = "table-col"
        row.appendChild(cell);
    }
    tblBody.appendChild(row);


    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    
    // Append everything into #generatedTable div;
    document.querySelector('#generatedTable').appendChild(tbl);
    appendPartialRows(data, CURRENT_PAGE)
}

function appendPartialRows(data, currentPage){
    CURRENT_PAGE = currentPage

    const startIndex = (currentPage - 1) * DISPLAY_SIZE;
    const endIndex = currentPage == PAGE_COUNT ? DATA_LIMIT : currentPage * DISPLAY_SIZE;
    DATA_COUNT_ELEM.innerHTML = endIndex

    const partialData = data.slice(startIndex, endIndex);
    const tblBody = document.querySelector("table tbody")
    // creating all cells
    for (let i = 0; i < partialData.length; i++) { 
        // creates a table row
        const row = document.createElement("tr");
        row.className = "table-row";
        let dataRow = partialData[i];

        // j=-2 = Additional 2 rooms for the index and image cells
        for (let j = -2; j < dataRow.length; j++) {
            const cell = document.createElement("td");
            let cellText;
            cell.className = "table-col"
            if(j == -2){
                // Index cell
                cellText = document.createTextNode(startIndex + i+1);
            }else if(j == -1){
                // Image cell
                cellText = document.createElement("img")
                cellText.className = "img"
                cellText.src = "/img.jpg"
            }else if(j==7){
                //Date cell
                dataRow[j] = formatDate(dataRow[j])
                cellText = document.createTextNode(dataRow[j]);
            }else{
                cellText = document.createTextNode(dataRow[j]);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
  }
}

function convertTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date){
    date = new Date(Date.parse(date))
    return (
        [
          date.getFullYear(),
          convertTo2Digits(date.getMonth() + 1),
          convertTo2Digits(date.getDate()),
        ].join('-') +
        ' ' +
        [
            convertTo2Digits(date.getHours()),
            convertTo2Digits(date.getMinutes()),
        ].join(':')
      );
}

var throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const handleInfiniteScroll = () => {
    // throttle 0.5 seconds 
    throttle(() => {
        const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

        if (endOfPage) {
            appendPartialRows(API_DATA, CURRENT_PAGE + 1)
        }

        // In the case of last page, remove infinite scroll listener
        if (CURRENT_PAGE == PAGE_COUNT){
            removeInfiniteScroll();
        }
    }, 500);
};

const removeInfiniteScroll = () => {
    window.removeEventListener("scroll", handleInfiniteScroll);
};

window.addEventListener("scroll", handleInfiniteScroll);