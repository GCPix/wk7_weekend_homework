const Beer = require('./models/beer.js')
const SingleView = require('./views/singleView.js')
const ListView = require('./views/listVew.js')
const SearchView = require('./views/searchView.js')
const NavView = require('./views/navView.js')

document.addEventListener('DOMContentLoaded', ()=>{

const beer = new Beer()
beer.bindEvents()


const listView = new ListView()
listView.bindEvents()

const searchContainer = document.querySelector('#food-search')
const searchView = new SearchView(searchContainer)
searchView.bindEvents()

const navView = new NavView()
navView.bindEvents()

})
