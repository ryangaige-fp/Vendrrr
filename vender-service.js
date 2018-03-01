function VenderService(){
  //private parts
  var money = 0

  //our purchaseable items, add some of your own!
  var items = [
    {
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 10
    },
    {
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 10
    },
    {
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      img: "",
      price: .75,
      amount: 10
    },
    {
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 10
    },
  ]

  //public parts

  
  this.addMoney = function(){
    money += .25
  }



}