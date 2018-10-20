const Beer = require('./models/beer.js')
const SingleView = require('./views/singleView.js')
const ListView = require('./views/listVew.js')

document.addEventListener('DOMContentLoaded', ()=>{

const beer = new Beer()
beer.bindEvents()


const listView = new ListView()
listView.bindEvents()


})
