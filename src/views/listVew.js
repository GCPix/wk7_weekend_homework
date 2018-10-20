const PubSub = require('../helpers/pubsub.js')
const SingleView = require('./singleView.js')

const ListView = function(container){
  this.container = container
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beer:allDataGiven', (event)=>{
      beerData = event.detail
      this.showMultiple(beerData)
    })
};

ListView.prototype.showMultiple = function (beerData) {

  const renderPlacement = document.querySelector('#display-data')
  const singleView = new SingleView(renderPlacement)

  beerData.forEach((beer) => singleView.populateContainer(beer))
};

module.exports = ListView
