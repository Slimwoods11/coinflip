let coin = {
  state: 0,
  flip: function () {
    this.state = Math.floor(Math.random() * 2) + 0;

    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
  },
  toString: function () {
    if (this.state === 1) {
      return 'heads';
    } else {
      return 'tails';
    }

    console.log('coin.toString'());
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  toHTML: function () {
    let image = document.createElement('img');
    if (this.state === 0) {
      image.src = './images/heads.png';
    } else {
      image.src = './images/tails.jpg';
    }
    return image;
  },

  /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
};

function display20Flips() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    let li = document.createElement('li');
    li.innerHTML = coin.toString();
    document.body.append(li);
  }
}

function display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();

    document.body.append(coin.toHTML());
  }
}

display20Flips();
display20Images();
//Note that you will need to download or create images to use to display face-up or face-down coins for the toHTML method. Create a folder directory named images in your repository *//
