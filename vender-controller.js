function VenderController() {
  //private parts
  let venderService = new VenderService();

  //items is an array we need to get from the service and give to drawItems
  function drawItems() {
    let items = venderService.getItems();
    let itemsElem = document.getElementById("items");
    let template = "";
    //for

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      template += `
      <div class="col-3 ">
        <h1>${item.name}</h1>
        <img src="${item.image}" alt="">
        <p>${item.description}</p>
        <p>Price: $ ${item.price}</p>
        <h4>Qty: ${item.amount}</h4>
        <button onclick="app.controllers.VenderController.purchase(${i})" </button>
      </div>
      
      `;
    }
    itemsElem.innerHTML = template;

    //we will take in a paramter(items) and iterate over it to build
    //a template to draw to the screen.
  }

  function drawMoney() {
    document.getElementById("money").innerText = venderService.getMoney();
  }
  //public parts
  //we need a function to take money from our "view" and pass it to our service

  this.purchase = function(index) {
    venderService.purchase(index);
    drawMoney();
    drawItems(venderService.getItems());
  };

  this.addMoney = function() {
    venderService.addMoney();
    drawMoney();
  };

  drawMoney();
  drawItems(venderService.getItems());
}
