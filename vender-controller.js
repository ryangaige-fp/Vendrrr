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
            itemsElem = items[i];
        }
        template += `
      
      <h1>${items.name}</h1>
      <img src="${items.image}" alt="">
      <h3>${items.description}</h3>
      <h3>${items.price}</h3>
      <h3>${items.amount}</>
      
      `;

        itemsElem.innerHTML = template;

    //we will take in a paramter(items) and iterate over it to build
    //a template to draw to the screen.
    }

    //public parts

    //we need a function to take money from our "view" and pass it to our service

    drawItems();
}
