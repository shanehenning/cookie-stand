// var allStoresArr = [pikePlaceArr, seaTac, souCen, bellSquare, alki];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeArray = [];

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

function createRow(store) {
  var timeLocation = document.getElementById('timeLocationEl');
  var tr = document.createElement('tr');
  tr.textContent = store.storeName;
  timeLocation.appendChild(tr);
  var th = document.createElement('th');
  th.textContent = 'Time';
  timeLocation.appendChild(th);
  var th2 = document.createElement('th');
  th2.textContent = 'Customers';
  timeLocation.appendChild(th2);
  var th3 = document.createElement('th');
  th3.textContent = 'Cookies';
  timeLocation.appendChild(th3);
  for (var i = 0; i < 15; i++) {
    var tr = document.createElement('tr');
    tr.textContent = hours[i];
    timeLocation.appendChild(tr);
    var td1 = document.createElement('td');
    td1.textContent = store.generatedCustomers[i];
    tr.appendChild(td1);
    var td2 = document.createElement('td');
    td2.textContent = store.cookiesPerHour[i];
    tr.appendChild(td2);
  }
  var tr = document.createElement('tr');
  tr.textContent = 'Total';
  timeLocation.appendChild(tr);
  var td1 = document.createElement('td');
  td1.textContent = store.totalCustomers;
  tr.appendChild(td1);
  var td2 = document.createElement('td');
  td2.textContent = store.totalDailySales;
  tr.appendChild(td2);
}

storeArray.push(new store('Pike Place', 17, 88, 5.2));
storeArray.push(new store('SeaTac Airport', 6, 24, 1.2));
storeArray.push(new store('Southcenter', 11, 38, 1.9));
storeArray.push(new store('Bellevue Square', 20, 48, 3.3));
storeArray.push(new store('Alki', 3, 24, 2.6));
// function createTable(store) {
// }

var formLocation = document.getElementById('form-location');

function createTable(event) {
  event.preventDefault();
  if (!event.target.store.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value) {
    return alert('Don\'t be stupid!');
  } else if (isNaN(event.target.min.value) || isNaN(event.target.max.value) || isNaN(event.target.avg.value)) {
    return alert('Must be a number!');
  }
  var newStore = event.target.store.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  var formStore = new store(newStore,min,max,avg);
  storeArray.push(formStore);
  for (var i = 0; i < storeArray.length; i++) {
    createRow(storeArray[i]);
  }

  storeArray = [];
}

formLocation.addEventListener('submit',createTable);
