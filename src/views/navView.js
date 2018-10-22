const Beer = require('../models/beer.js')
const SingleView = require('./singleView.js')
const ListView = require('./listVew.js')
const SearchView = require('./searchView.js')

const NavView = function(){

};

NavView.prototype.bindEvents = function () {
  const homeButton = document.querySelector('.home')
  const searchFoodButton = document.querySelector('.search-food')
  const searchAbvButton = document.querySelector('.search-abv')

  homeButton.addEventListener('click', ()=>{
    const listView = new ListView()
    listView.showMultiple(beerData)
  })
  searchFoodButton.addEventListener('click', ()=>{

    const searchView = new SearchView()

    const searchFoodDiv = document.querySelector('#food-search')
    if(searchFoodDiv.style.display === 'none'){
      searchFoodDiv.style.display = 'block'
    } else { searchFoodDiv.style.display ='none'
      }


  })
  searchAbvButton.addEventListener('click', ()=>{
    console.log('yes I see you');
    const searchView = new SearchView()
    const searchAlcoholDiv = document.querySelector('#abv-search')
    if(searchAlcoholDiv.style.display === 'none'){
      searchAlcoholDiv.style.display = 'block'
    } else {searchAlcoholDiv.style.display = 'none'}
  });

};
module.exports = NavView
