const PubSub = require('../helpers/pubsub.js')
const Request = require('../helpers/request.js')

const BeerData = function(){
this.data = null

};

BeerData.prototype.bindEvents = function () {
  this.getData()
  PubSub.subscribe('SearchView:foodSearchInput', (event)=>{
      searchValue = event.detail
      test = this.findFood(searchValue);
      console.log(test);

    })

};

BeerData.prototype.getData = function () {
  const request = new Request('https://api.punkapi.com/v2/beers')
  request.get().then(responseData => {
    this.data = responseData
    PubSub.publish('Beer:allDataGiven', this.data)

  })
};

BeerData.prototype.findFood = function (searchValue){
  const searchResult = this.data.filter(item => item.food_pairing.includes(searchValue));
  PubSub.publish('Beer:foodBeerDataGiven', searchResult)

}

module.exports = BeerData
