let money = 0;

function VenderService() {
  //private parts

  //our purchaseable items, add some of your own!
  //we could add an id property to these items to display location for purchasing(A1, D4, etc)
  let items = [
    {
      name: "Fruit Snack Gummies",
      // image: "assets/photos/FruitSnacks.jpg",
      description: "Fruit salad done right.",
      price: 1.0,
      amount: 45
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.0,
      amount: 20
    },
    {
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: 0.75,
      amount: 3
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: 0.25,
      amount: 7
    },
    {
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1
    }
  ];

  // items.push(
  //   new Items(
  //     "Fruit Snack Gummies",
  //     "assets/photos/FruitSnacks.jpg",
  //     "Fruit salad done right.",
  //     1.0,
  //     45
  //   ),
  //   new Items(
  //     "Plant Food",
  //     "Are you hungry? I could use a light snack.",
  //     5.0,
  //     20
  //   ),
  //   new Items("Admiral-able Ack-Bar", "Snack like an Admiral.", 0.75, 3),
  //   new Items("Paranormal Snacktivity", "The perfect midnight snack.", 0.25, 7),
  //   new Items("The Void", "This snack eats you!", 3.25, 1)
  // );

  // function Items(name, image, description, price, amount) {
  //   this.name = name;
  //   this.image = image;
  //   this.description = description;
  //   this.price = price;
  //   this.amount = amount;
  // }

  this.getItems = function() {
    let itemsCopy = [];
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let itemCopy = {
        name: item.name,
        image: item.image,
        description: item.description,
        price: item.price,
        amount: item.amount
      };
      itemsCopy.push(itemCopy);
    }
    return itemsCopy;
  };

  //public parts

  this.purchase = function(index) {
    let item = items[index];

    if (money >= item.price) {
      //decrement the qty
      items.amount--;
      // decrement the price
      money -= item.price;
    }
  };

  this.getMoney = function() {
    return money;
  };

  this.addMoney = function() {
    money += 0.25;
  };
}
