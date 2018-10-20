const PubSub = require('../helpers/pubsub.js')
const Request = require('../helpers/request.js')

const BeerData = function(){
this.data = null

};

BeerData.prototype.bindEvents = function () {
  this.getData()

};

BeerData.prototype.getData = function () {
  const request = new Request('https://api.punkapi.com/v2/beers')
  request.get().then(responseData => {
    this.data = responseData
    console.log(this.data);
    PubSub.publish('Beer:allDataGiven', this.data)

  })
};

module.exports = BeerData
