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
    if (Math.random() < 0.5) {
      this.image--;
      this.heads = 1;
      this.tails = 0;
    }
    image.innerHTML = 'heads';
    image.innerHTML = 'tails';

    document.body.append(image);

    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

//Note that you will need to download or create images to use to display face-up or face-down coins for the toHTML method. Create a folder directory named images in your repository t
coin.flip();
document.body.append(coin.toString());
