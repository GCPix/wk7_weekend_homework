const PubSub = require('../helpers/pubsub.js')

//container is container from listView and needs to be specifiec in app.js with a querySelector
const SingleView = function(container){
  this.container = container
};

SingleView.prototype.bindEvents = function () {

};

SingleView.prototype.createDiv = function (data) {
  const div = document.createElement('div')
  div.id = `id${data.id}`
  this.container.appendChild(div)

};

SingleView.prototype.createPTag = function (key,value,data) {
  const p = document.createElement('p')
  p.textContent = `${key}: ${value}`
  p.classList = `para-${data.id}`
  const paraParent = document.querySelector(`#id${data.id}`)
  paraParent.appendChild(p)
};

SingleView.prototype.showMoreButton = function (data, descriptor) {

  const paraParent = document.querySelector(`#id${data.id}`);
  const button = document.createElement('button');
  button.classList = data.id;
  const buttonParent = document.querySelector(`#desc-${data.id}`);
  buttonParent.appendChild(button);
  button.textContent = `Show ${descriptor}`;

  button.addEventListener('click', ()=>{

    const displaySetting = document.getElementById(`descP-${data.id}`)

      if (displaySetting.style.display === "none") {
          displaySetting.style.display = "block";
          button.textContent = `Hide ${descriptor}`

      } else {
          displaySetting.style.display = "none";
          button.textContent = `Show ${descriptor}`
      }
  });
}

SingleView.prototype.populateContainer = function (data) {
  this.createDiv(data)
  const paraParent = document.querySelector(`#id${data.id}`)
  const nameHeading = document.createElement('h3')
  paraParent.appendChild(nameHeading)
  nameHeading.textContent = data.name

  const img = document.createElement('img')
  img.classList = 'image-text'
  paraParent.appendChild(img)
  img.src = data.image_url

  this.createPTag('Date First Brewed', data.first_brewed, data)


  for (item of data.food_pairing){
    this.createPTag('Food Parings', item, data)
  }

  const descriptionDiv = document.createElement('div')
  paraParent.appendChild(descriptionDiv)
  descriptionDiv.id = `desc-${data.id}`

  const descP = document.createElement('p')
  descP.textContent = `Description: ${data.description}`
  descP.id = `descP-${data.id}`
  // const paraParent = document.querySelector(`#id${data.id}`)
  // paraParent.appendChild(descP)


  const pParent = document.querySelector(`.para-${data.id}`)
  descriptionDiv.appendChild(descP)
  this.showMoreButton(data, 'Description')
  descP.style.display = 'none';
  //descriptionDiv.textContent = data.description
};



module.exports = SingleView
