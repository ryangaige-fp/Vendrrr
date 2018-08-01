function VenderController() {
  //private parts
  let venderService = new VenderService();

  //items is an array we need to get from the service and give to drawItems
  function drawItems(items) {
    let money = venderService.getMoney();
    //we will take in a parameter(items) and iterate over it to build
    //a template to draw to the screen.
    let template = "";

    for (let index = 0; index < items.length; index++) {
      const item = items[index];

      if (money < item.price) {
        template += `
        <div style="outline: 1px solid black" class="col-3">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <p>$ ${item.price}</p>
              <p>Qty: ${item.amount}</p>
              <button disabled onclick="app.controllers.venderController.purchase(${index})">Purchase</button>
        </div>
        `;
      } else {
        template += `
        <div style="outline: 1px solid red;" class="col-3">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>$ ${item.price}</p>
        <p>Qty: ${item.amount}</p>
        <button onclick="app.controllers.venderController.purchase(${index})">Purchase</button>
        </div>
        `;
      }
      document.getElementById("items").innerHTML = template;
      document.getElementById("money").innerText = money;
    }
  }

  function drawPurchased(item) {
    let template = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>$ ${item.price}</p>
    `;
    document.getElementById("purchased").innerHTML = template;
  }

  //public parts

  this.makeSnack = function(event) {
    event.preventDefault();
    let formData = event.target;

    let newSnack = {
      title: formData.title.value,
      description: formData.description.value,
      price: formData.price.value,
      quantity: formData.amount.value
    };
    venderService.makeSnack(newSnack);
    formData.title.value = "";
    formData.description.value = "";
    formData.price.value = "";
    formData.amount = "";

    drawItems(venderService.makeSnack());
  };

  this.purchase = function(index) {
    let item = venderService.purchase(index);
    drawItems(venderService.getItems());
    if (item) {
      drawPurchased(item);
    }
  };

  //we need a function to take money from our "view" and pass it to our service
  this.addMoney = function() {
    venderService.addMoney();
    drawItems(venderService.getItems());
  };

  drawItems(venderService.getItems());
}
