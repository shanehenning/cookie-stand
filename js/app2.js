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
      this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      this.totalCustomers += this.generatedCustomers[i];
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  };
  this.getCustomers();
}

// function CreateRow(store){
//   var timeLocation = document.getElementById('timeLocationEl');
//   // rowLocationEl.appendChild(th);
//   // var td = document.createElement('td');
//   // var th = document.createElement('th');
//   // th.textContent = store.storeName;
//   // tr.appendChild(th);
//   for (var i = 0; i < 15; i++){
//     var tr = document.createElement('tr');
//     var th = document.createElement('th');
//     tr.textContent = hours[i];
//     timeLocation.appendChild(tr);
//     th.textContent = store.generatedCustomers[i];
//     tr.appendChild(th);
//     // td.textContent = store.cookiesPerHour[i];
//     // tr.appendChild(td);
//   }
// }

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

function createTable(store) {
  for (var i = 0; i < storeArray.length; i++) {
    createRow(storeArray[i]);
  }
}

createTable();
//
// function writeTable (){
//   for (var i = 0; i < storeArray.length; i++){
//     store.createRow(storeArray[i]);
//   }
// }
  //Find how many cookies were sold each hour:
  //Multiply random number of customers (generatedCustomers) by average cookies sold per customer (avgCookiesPerCustomer)
  //Totals all cookies sales into an array (totalDailySales)
  // this.hourlyCookiesSold = function(){
  //   for (i = 0; i < 15; i++){
  //
  //   }
  // };
//Writes hours into first column of table
  // this.writeHours = function(){
  //   var pageLocation = document.getElementById('time-column');
  //   for (i = 0; i < 15; i++){
  //     var tableEl = document.createElement('tr');
  //     tableEl.textContent = hours[i];
  //     pageLocation.appendChild(tableEl);
  //   }
  // };
  // //Writes hourly customers into second column of table
  // this.writeCustomers = function(){
  //   var pageLocation = document.getElementById('customer-column');
  //   for (i = 0; i < 15; i++){
  //     var tableEl = document.createElement('tr');
  //     tableEl.textContent = this.generatedCustomers[i];
  //     pageLocation.appendChild(tableEl);
  //   }
  // };
  // //Writes total customers into second column of table
  // this.writeTotalCustomers = function(){
  //   var pageLocation = document.getElementById('customer-column');
  //   var tableEl = document.createElement('tr');
  //   tableEl.textContent = this.totalCustomers;
  //   pageLocation.appendChild(tableEl);
  // };
  // //Writes cookie sales into third column of table
  // this.writeCookieSales = function(){
  //   var pageLocation = document.getElementById('cookie-column');
  //   for (i = 0; i < 15; i++){
  //     var tableEl = document.createElement('tr');
  //     tableEl.textContent = Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer);
  //     pageLocation.appendChild(tableEl);
  //   }
  // };
  // //Writes total cookies into third column of table
  // this.writeTotalCookies = function(){
  //   var pageLocation = document.getElementById('cookie-column');
  //   var tableEl = document.createElement('tr');
  //   tableEl.textContent = this.totalDailySales;
  //   pageLocation.appendChild(tableEl);
  // };

  // this.createTable = function(){
  //   var pageLocation = document.getElementById('cookie-column');
  //   for (i = 0; i < 15; i++){
  //     var tabelEl = document.createElement('tr');
  //     tableEl.textContent =
  //   }
  // }
//Call a thousand functions
  // this.writeHours();
  // this.getCustomers();
  // this.hourlyCookiesSold();
  // this.writeCustomers();
  // this.writeTotalCustomers();
  // this.writeCookieSales();
  // this.writeTotalCookies();
// var seatacAirportStore = new store('SeaTac Airport');
// var southcenterStore = new store('Southcenter Airport');
// var bellevueSquareStore = new store('Bellevue Square');
// var alkiStore = new store('Alki');
