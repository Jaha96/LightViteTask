export function merge(data1, data2) {
  //  data1 - Raw TSV text
  //  data2 - JSON format
  const start = Date.now();
  let data = [];


  //  1. data1 raw TSV to ARRAY
  data1 = data1.split('\n');
  if  (data1.length > 0) data1.shift();  //Removing first title row
  for (var temp, i=0; i<data1.length; i++) {
    temp = data1[i].split('\t').map(function(element, index){
      // Convert integer numbers
      if(index >= 3 & index <= 6){
        return Number(element)
      } else{
        return element
      }
    });
    data1[i] = temp;
  }


  // 2. data2 JSON to ARRAY
  var convertedData2 = [];
  data2.forEach(row => {
    convertedData2.push(Object.keys(row).map((key) => row[key]))
  });
  data2 = convertedData2;

  if ((!data1 || data1.length == 0) || (!data2 || data2.length == 0) ) {
    console.error('No data provided');
  }
  console.log("hii")

  //your code - start

  // Merge arrays using Spread operator
  data = [...data1, ...data2]

  //your code - end

  const duration = Date.now() - start;
  console.log("Merge duration: ", duration);
  return data;
}