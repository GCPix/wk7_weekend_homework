const PubSub = require('../helpers/pubsub.js')
const SingleView = require('./singleView.js')
const SearchView = require('./searchView.js')

const ListView = function(container){
  this.container = container
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:allDataGiven', (event)=>{
      beerData = event.detail
      this.showMultiple(beerData)
    })
    PubSub.subscribe('Beer:foodBeerDataGiven', (event)=>{
        result = event.detail
        console.log(result);
        searchView = new SearchView()
        this.showMultiple(result)
      })
};

ListView.prototype.showMultiple = function (beerData) {

  const renderPlacement = document.querySelector('#display-data')
  const singleView = new SingleView(renderPlacement)
  renderPlacement.innerHTML = ''
  beerData.forEach((beer) => singleView.populateContainer(beer))
};

module.exports = ListView
