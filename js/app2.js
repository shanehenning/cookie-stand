// var allStoresArr = [pikePlaceArr, seaTac, souCen, bellSquare, alki];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeArray = [];
//Constructor to create new store objects
function store(storeName, minCust, maxCust, avgCookiesPerCustomer){
  this.storeName = storeName;
  this.hrsOpen = 14;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.generatedCustomers = [];
  this.totalCustomers = 0;
  this.cookiesPerHour = [];
  this.totalDailySales = 0;
// Generates random number of customers between minCust and maxCust for each hour
  this.getCustomers = function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      parseInt(this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust));
      this.totalCustomers += parseInt(this.generatedCustomers[i]);
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  };
  this.getCustomers();
}

function createRow() {
  var timeLocation = document.getElementById('timeLocationEl');
  var th = document.createElement('th');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  for (var i = 0; i < 15; i++) {
//Puts in the hours in column headers
    th.textContent = hours[i];
    timeLocation.appendChild(th);
//   // puts in store name to column 1
//     tr.textContent = store.storeName;
//     th.appendChild(tr);
//   //Puts in customers column
//     td.textContent = store.cookiesPerHour[i];
//     tr.appendChild(td);
  }
//Puts in total column header
  td.textContent = 'Total';
  timeLocation.appendChild(td);
//Total cookies column 3
  td.textContent = store.totalDailySales;
  tr.appendChild(td);
}
//Constructing each store object
storeArray.push(new store('Pike Place', 17, 88, 5.2));
storeArray.push(new store('SeaTac Airport', 6, 24, 1.2));
storeArray.push(new store('Southcenter', 11, 38, 1.9));
storeArray.push(new store('Bellevue Square', 20, 48, 3.3));
storeArray.push(new store('Alki', 3, 24, 2.6));

//Finds the location in the html
var formLocation = document.getElementById('form-location');

function createTable(event) {
  event.preventDefault();
  if (!event.target.store.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert('Don\'t be stupid!');
  } else if (isNaN(event.target.min.value) || isNaN(event.target.max.value) || isNaN(event.target.avg.value)) {
    return alert('Must be a number!');
  }

//Stores the form data into variables
  var newStore = event.target.store.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);
//Constructs a new store and stores that in a new variable
  var formStore = new store(newStore,min,max,avg);
//Pushes the constructed store into the storeArray
  storeArray.push(formStore);
//Prints the whole table
  for (var i = 0; i < 15; i++) {
    createRow(storeArray[i]);
  }
//Clears the first print so that it won't duplicate on more submissions
  storeArray = [];
}
//Event Listener to construct table upon submission of form
formLocation.addEventListener('submit',createTable);
