const Beer = require('../models/beer.js')
const SingleView = require('./singleView.js')
const ListView = require('./listVew.js')
const PubSub = require('../helpers/pubsub.js')


const SearchView = function(container){
  this.container = container;

};

SearchView.prototype.bindEvents = function () {
  this.searchFoodBox()


  const searchReady = document.querySelector('#searchButton')
  searchReady.addEventListener('click', (event)=>{
    const inputData = document.getElementById('searchBox').value;
    PubSub.publish('SearchView:foodSearchInput', inputData)
  })
};


//no idea why you did all of this in js it could have been done a lot faster in index
SearchView.prototype.searchFoodBox = function () {
  const searchDiv = document.querySelector('#food-search');
  searchDiv.style.display = 'none'
  const foodLabel = document.createElement('label')
  searchDiv.appendChild(foodLabel)
  foodLabel.style = 'font-size: 16px;'
  foodLabel.textContent = 'Search for the perfect beer to accompany your food'
  const searchBox = document.createElement('input');
  searchBox.id = 'searchBox';
  searchBox.type = 'search';
  searchBox.name = 'q';
  searchBox.placeholder = 'eating? perfect drink?';
  searchDiv.appendChild(searchBox);
  const inputDetail = searchBox.value;

  const searchButton = document.createElement('button');
  searchDiv.appendChild(searchButton);
  searchButton.id = 'searchButton'
  searchButton.textContent = 'Search'
};

SearchView.prototype.searchAbvBox = function () {
  const searchDiv = document.querySelector('#abv-search');
  searchDiv.style.display = 'none';
  const abvLabel = document.createElement('label')
  searchDiv.appendChild(abvLabel)
  abvLabel.style = 'font-size: 16px;'
  abvLabel.textContent = 'Enter alcohol percentage and select above or below'
  const searchBox = document.createElement('input');
  searchBox.id = 'searchBox';
  searchBox.type = 'search';
  searchBox.name = 'q';
  searchDiv.appendChild(searchBox);
  const inputDetail = searchBox.value;

  const searchButton = document.createElement('button');
  searchDiv.appendChild(searchButton);
  searchButton.id = 'searchButton'
  searchButton.textContent = 'Search'
};

module.exports = SearchView
