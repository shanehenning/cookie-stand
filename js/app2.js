// var allStoresArr = [pikePlaceArr, seaTac, souCen, bellSquare, alki];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

function store(storeName){
  this.storeName = storeName;
  this.hrsOpen = 14;
  this.minCust = 17;
  this.maxCust = 88;
  this.avgCookiesPerCustomer = 5.2;
  this.generatedCustomers = [];
  this.totalCustomers = 0;
  this.cookiesPerHour = [];
  this.totalDailySales = 0;
// Generates random number of customers between minCust and maxCust for each hour
  this.getCustomers = function(minCust, maxCust) {
    for (i = 0; i < 15; i++){
      this.generatedCustomers.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
      this.totalCustomers += this.generatedCustomers[i];
    }
  };
  //Find how many cookies were sold each hour
  //Multiply random number of customers (generatedCustomers) by average cookies sold per customer (avgCookiesPerCustomer)
  //Totals all cookies sold into array (totalDailySales)
  this.hourlyCookiesSold = function(){
    for (i = 0; i < 15; i++){
      this.cookiesPerHour.push(Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesPerHour[i];
    }
  };
//Writes hours into first column of table
  this.writeHours = function(){
    var pikeList = document.getElementById('hour-column');
    for (i = 0; i < 16; i++){
      var listData = document.createElement('td');
      listData.textContent = hours[i];
      pikeList.appendChild(listData);
    }
  };
  //Writes cookie sales into html in a ul
  this.writeCookieSales = function(){
    var pikeList = document.getElementById('row-two');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('td');
      listData.textContent = Math.round(this.generatedCustomers[i] * this.avgCookiesPerCustomer);
      pikeList.appendChild(listData);
    }
  };
  //Writes total cookies into ul
  this.writeTotalCookies = function(){
    var pikeList = document.getElementById('row-two');
    var listData = document.createElement('td');
    listData.textContent = this.totalDailySales;
    pikeList.appendChild(listData);
  };
  //Writes hourly customers into html in a ul
  this.writeCustomers = function(){
    var pikeList = document.getElementById('row-one');
    for (i = 0; i < 15; i++){
      var listData = document.createElement('td');
      listData.textContent = this.generatedCustomers[i];
      pikeList.appendChild(listData);
    }
  };
  //Writes total customers into ul
  this.writeTotalCustomers = function(){
    var pikeList = document.getElementById('row-one');
    var listData = document.createElement('td');
    listData.textContent = this.totalCustomers;
    pikeList.appendChild(listData);
  };

//Call a  thousand functions
  this.writeHours();
  this.getCustomers();
  this.hourlyCookiesSold();
  this.writeCookieSales();
  this.writeTotalCookies();
  this.writeCustomers();
  this.writeTotalCustomers();
}
var pikePlaceStore = new store('Pike Place');
// var seatacAirportStore = new store('SeaTac Airport');
// var southcenterStore = new store('Southcenter Airport');
// var bellevueSquareStore = new store('Bellevue Square');
// var alkiStore = new store('Alki');
