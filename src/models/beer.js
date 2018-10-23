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

  const searchResult = this.data.filter(item => item.food_pairing.some(pairing => pairing.includes(searchValue)))


    PubSub.publish('Beer:foodBeerDataGiven', searchResult)


}


// BeerData.prototype.findAlcoholAboveContentLevel = function (number) {
//   const searchResult = this.data.filter(item => item.abv>=number)
//   PubSub.publish('Beer:beerAboveLevelData', searchResult)
// };
//
// BeerData.prototype.findAlcoholbelowContentLevel = function (number) {
//   const searchResult = this.data.filter(item => item.abv<=number)
//   PubSub.publish('Beer:beerBelowLevelData', searchResult)
// };

module.exports = BeerData
