const SearchView = function(){

};

SearchView.prototype.findFood = function (data, searchValue) {

const results = data.filter(item=>item.food_pairing.toLowerCase().includes(searchValue));
    
};
