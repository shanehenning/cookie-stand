// var allStoresArr = [pikePlaceArr, seaTac, souCen, bellSquare, alki];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
var storeArray = [];
var formStoreArray = [];
//Constructor to create new store objects
function store(storeName, minCust, maxCust, avgCookiesPerCustomer){
  this.storeName = storeName;
  this.hrsOpen = 14;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHour = [];
  // this.totalCustomers = 0;
  this.cookiesPerHour = [];
  this.totalDailySales = 0;
// Generates random number of customers between minCust and maxCust for each hour
  this.generateCustomersAndCookies = function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      // this.totalCustomers += this.customersPerHour[i];
      this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  };
  this.generateCustomersAndCookies();
}

//Create Table Header (Times)
function tableHeader() {
  var timeLocation = document.getElementById('timeLocationEl');
  var th = document.createElement('th');
  th.textContent = ' ';
  timeLocation.appendChild(th);
  for (var i = 0; i < hours.length; i++){
    var th = document.createElement('th');
    th.textContent = hours[i];
    timeLocation.appendChild(th);
  }
}
//Creates table with given info for the first 5 stores
function baseStoreData() {
  var timeLocation = document.getElementById('timeLocationEl');
  for (var x = 0; x < storeArray.length; x++) {
//Puts in store name to column 1
    var tr = document.createElement('tr');
    tr.textContent = storeArray[x].storeName;
    timeLocation.appendChild(tr);
//Puts in customers column
    for (var y = 0; y < hours.length; y++){
      var td = document.createElement('td');
      td.textContent = storeArray[x].cookiesPerHour[y];
      tr.appendChild(td);
    }
//Puts in totals for each store
    td.textContent = storeArray[x].totalDailySales;
    tr.appendChild(td);
  }
// Total cookies column 3
}
//Creates new line for form store that user inputs
function inputFormData() {
  var timeLocation = document.getElementById('timeLocationEl');
  for (var x = 0; x < formStoreArray.length; x++) {
  // puts in store name to column 1
    var tr = document.createElement('tr');
    tr.textContent = formStoreArray[x].storeName;
    timeLocation.appendChild(tr);
  //Puts in customers column
    for (var y = 0; y < hours.length; y++){
      var td = document.createElement('td');
      td.textContent = formStoreArray[x].cookiesPerHour[y];
      tr.appendChild(td);
    }
    td.textContent = formStoreArray[x].totalDailySales;
    tr.appendChild(td);
  }
// Total cookies column 3
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
  formStoreArray.push(formStore);
//Prints the whole table
  for (var z = 0; z < formStoreArray.length; z++){
    inputFormData(formStoreArray[z]);
    formStoreArray = [];
  //Clears the first print so that it won't duplicate on more submissions
  }
}
//Event Listener to construct table upon submission of form
tableHeader();
baseStoreData();
formLocation.addEventListener('submit',createTable);
