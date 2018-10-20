const Beer = require('../models/beer.js')
const SingleView = require('./singleView.js')
const ListView = require('./listVew.js')
const PubSub = require('../helpers/pubsub.js')


const SearchView = function(container){
  this.container = container;

};

SearchView.prototype.bindEvents = function () {
  this.searchBox()
  beer = new Beer();
  const searchReady = document.querySelector('#searchButton')
  searchReady.addEventListener('click', (event)=>{
    const inputData = document.getElementById('searchBox').value;
    PubSub.publish('SearchView:foodSearchInput', inputData)
  })
};
// SearchView.prototype.findFood = function (array, searchValue) {
//  array.food_pairing.filter((item) => {item.includes(searchValue)});
// }

SearchView.prototype.searchBox = function () {

  const searchBox = document.createElement('input');
  searchBox.id = 'searchBox';
  searchBox.type = 'search';
  searchBox.name = 'q';
  searchBox.placeholder = 'eating? perfect drink?';
  const searchDiv = document.querySelector('#food-search');
  searchDiv.appendChild(searchBox);
  const inputDetail = searchBox.value;

  const searchButton = document.createElement('button');
  searchDiv.appendChild(searchButton);
  searchButton.id = 'searchButton'
  searchButton.textContent = 'Search'
};



module.exports = SearchView
