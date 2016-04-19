// var allStoresArr = [pikePlaceArr, seaTac, souCen, bellSquare, alki];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

var pikePlaceStore = {
  storeName: 'Pike Place',
  hrsOpen: 14,
  minCust: 17,
  maxCust: 88,
  avgCookiesPerCustomer: 5.2,
  generatedCustomers: [],
  totalCustomers: 0,
  cookiesPerHour: [],
  totalDailySales: 0,
// Generates random number of customers between minCust and maxCust for each hour
  getCustomers: function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      this.totalCustomers += this.generatedCustomers[i];
    }
  },
  //Find how many cookies were sold each hour
  //Multiply random number of customers (generatedCustomers) by average cookies sold per customer (avgCookiesPerCustomer)
  //Totals all cookies sold into array (totalDailySales)
  hourlyCookiesSold: function(){
    for (i = 0; i < 15; i++){
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  },
  //Writes cookie sales into html in a ul
  writeCookieSales: function(){
    var pikeList = document.getElementById('pike-place');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' cookies';
      pikeList.appendChild(listData);
    }
  },
  //Writes total cookies into ul
  writeTotalCookies: function(){
    var pikeList = document.getElementById('pike-place');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalDailySales + ' cookies';
    pikeList.appendChild(listData);
  },
  //Writes hourly customers into html in a ul
  writeCustomers: function(){
    var pikeList = document.getElementById('pike-place-customers');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' customers';
      pikeList.appendChild(listData);
    }
  },
  //Writes total customers into ul
  writeTotalCustomers: function(){
    var pikeList = document.getElementById('pike-place-customers');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalCustomers + ' customers';
    pikeList.appendChild(listData);
  },
};
//Call a  thousand functions
pikePlaceStore.getCustomers();
pikePlaceStore.hourlyCookiesSold();
pikePlaceStore.writeCookieSales();
pikePlaceStore.writeTotalCookies();
pikePlaceStore.writeCustomers();
pikePlaceStore.writeTotalCustomers();
//------------------------------------------------------------------
var seatacAirportStore = {
  storeName: 'SeaTac Airport',
  hrsOpen: 14,
  minCust: 17,
  maxCust: 88,
  avgCookiesPerCustomer: 5.2,
  generatedCustomers: [],
  totalCustomers: 0,
  cookiesPerHour: [],
  totalDailySales: 0,
// Generates random number of customers between minCust and maxCust for each hour
  getCustomers: function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      this.totalCustomers += this.generatedCustomers[i];
    }
  },
  //Find how many cookies were sold each hour
  //Multiply random number of customers (generatedCustomers) by average cookies sold per customer (avgCookiesPerCustomer)
  //Totals all cookies sold into array (totalDailySales)
  hourlyCookiesSold: function(){
    for (i = 0; i < 15; i++){
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  },
  //Writes cookie sales into html in a ul
  writeCookieSales: function(){
    var seaTacList = document.getElementById('seatac-airport');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' cookies';
      seaTacList.appendChild(listData);
    }
  },
  //Writes total cookies into ul
  writeTotalCookies: function(){
    var seaTacList = document.getElementById('seatac-airport');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalDailySales + ' cookies';
    seaTacList.appendChild(listData);
  },
  //Writes hourly customers into html in a ul
  writeCustomers: function(){
    var seaTacList = document.getElementById('seatac-airport-customers');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' customers';
      seaTacList.appendChild(listData);
    }
  },
  //Writes total customers into ul
  writeTotalCustomers: function(){
    var seaTacList = document.getElementById('seatac-airport-customers');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalCustomers + ' customers';
    seaTacList.appendChild(listData);
  },
};
seatacAirportStore.getCustomers();
seatacAirportStore.hourlyCookiesSold();
seatacAirportStore.writeCookieSales();
seatacAirportStore.writeTotalCookies();
seatacAirportStore.writeCustomers();
seatacAirportStore.writeTotalCustomers();
//------------------------------------------------------------------
var southcenterStore = {
  storeName: 'Southcenter Airport',
  hrsOpen: 14,
  minCust: 17,
  maxCust: 88,
  avgCookiesPerCustomer: 5.2,
  generatedCustomers: [],
  totalCustomers: 0,
  cookiesPerHour: [],
  totalDailySales: 0,
// Generates random number of customers between minCust and maxCust for each hour
  getCustomers: function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      this.totalCustomers += this.generatedCustomers[i];
    }
  },
  //Find how many cookies were sold each hour
  //Multiply random number of customers (generatedCustomers) by average cookies sold per customer (avgCookiesPerCustomer)
  //Totals all cookies sold into array (totalDailySales)
  hourlyCookiesSold: function(){
    for (i = 0; i < 15; i++){
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  },
  //Writes cookie sales into html in a ul
  writeCookieSales: function(){
    var southcenterList = document.getElementById('south-center');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' cookies';
      southcenterList.appendChild(listData);
    }
  },
  //Writes total cookies into ul
  writeTotalCookies: function(){
    var southcenterList = document.getElementById('south-center');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalDailySales + ' cookies';
    southcenterList.appendChild(listData);
  },
  //Writes hourly customers into html in a ul
  writeCustomers: function(){
    var southcenterList = document.getElementById('south-center-customers');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' customers';
      southcenterList.appendChild(listData);
    }
  },
  //Writes total customers into ul
  writeTotalCustomers: function(){
    var southcenterList = document.getElementById('south-center-customers');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalCustomers + ' customers';
    southcenterList.appendChild(listData);
  },
};
southcenterStore.getCustomers();
southcenterStore.hourlyCookiesSold();
southcenterStore.writeCookieSales();
southcenterStore.writeTotalCookies();
southcenterStore.writeCustomers();
southcenterStore.writeTotalCustomers();
//------------------------------------------------------------------
var bellevueSquareStore = {
  storeName: 'Bellevue Square',
  hrsOpen: 14,
  minCust: 17,
  maxCust: 88,
  avgCookiesPerCustomer: 5.2,
  generatedCustomers: [],
  totalCustomers: 0,
  cookiesPerHour: [],
  totalDailySales: 0,
// Generates random number of customers between minCust and maxCust for each hour
  getCustomers: function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      this.totalCustomers += this.generatedCustomers[i];
    }
  },
  //Find how many cookies were sold each hour
  //Multiply random number of customers (generatedCustomers) by average cookies sold per customer (avgCookiesPerCustomer)
  //Totals all cookies sold into array (totalDailySales)
  hourlyCookiesSold: function(){
    for (i = 0; i < 15; i++){
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  },
  //Writes cookie sales into html in a ul
  writeCookieSales: function(){
    var bellevueSquareList = document.getElementById('bellevue-square');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' cookies';
      bellevueSquareList.appendChild(listData);
    }
  },
  //Writes total cookies into ul
  writeTotalCookies: function(){
    var bellevueSquareList = document.getElementById('bellevue-square');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalDailySales + ' cookies';
    bellevueSquareList.appendChild(listData);
  },
  //Writes hourly customers into html in a ul
  writeCustomers: function(){
    var bellevueSquareList = document.getElementById('bellevue-square-customers');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' customers';
      bellevueSquareList.appendChild(listData);
    }
  },
  //Writes total customers into ul
  writeTotalCustomers: function(){
    var bellevueSquareList = document.getElementById('bellevue-square-customers');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalCustomers + ' customers';
    bellevueSquareList.appendChild(listData);
  },
};
bellevueSquareStore.getCustomers();
bellevueSquareStore.hourlyCookiesSold();
bellevueSquareStore.writeCookieSales();
bellevueSquareStore.writeTotalCookies();
bellevueSquareStore.writeCustomers();
bellevueSquareStore.writeTotalCustomers();
//------------------------------------------------------------------
var alkiSquareStore = {
  storeName: 'Alki',
  hrsOpen: 14,
  minCust: 17,
  maxCust: 88,
  avgCookiesPerCustomer: 5.2,
  generatedCustomers: [],
  totalCustomers: 0,
  cookiesPerHour: [],
  totalDailySales: 0,
// Generates random number of customers between minCust and maxCust for each hour
  getCustomers: function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      this.totalCustomers += this.generatedCustomers[i];
    }
  },
  //Find how many cookies were sold each hour
  //Multiply random number of customers (generatedCustomers) by average cookies sold per customer (avgCookiesPerCustomer)
  //Totals all cookies sold into array (totalDailySales)
  hourlyCookiesSold: function(){
    for (i = 0; i < 15; i++){
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  },
  //Writes cookie sales into html in a ul
  writeCookieSales: function(){
    var alkiSquareList = document.getElementById('alki-store');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' cookies';
      alkiSquareList.appendChild(listData);
    }
  },
  //Writes total cookies into ul
  writeTotalCookies: function(){
    var alkiSquareList = document.getElementById('alki-store');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalDailySales + ' cookies';
    alkiSquareList.appendChild(listData);
  },
  //Writes hourly customers into html in a ul
  writeCustomers: function(){
    var alkiSquareList = document.getElementById('alki-store-customers');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('li');
      listData.textContent = hours[i] + ': ' + this.generatedCustomers[i] + ' customers';
      alkiSquareList.appendChild(listData);
    }
  },
  //Writes total customers into ul
  writeTotalCustomers: function(){
    var alkiSquareList = document.getElementById('alki-store-customers');
    var listData = document.createElement('li');
    listData.textContent = hours[15] + ': ' + this.totalCustomers + ' customers';
    alkiSquareList.appendChild(listData);
  },
};
alkiSquareStore.getCustomers();
alkiSquareStore.hourlyCookiesSold();
alkiSquareStore.writeCookieSales();
alkiSquareStore.writeTotalCookies();
alkiSquareStore.writeCustomers();
alkiSquareStore.writeTotalCustomers();
