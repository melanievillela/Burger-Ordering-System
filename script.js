//Variables
const toppings = document.querySelectorAll(".item");
const reset = document.querySelector("#reset");
const paper = document.querySelector("#order");
const orderItems = document.querySelectorAll("#order");

//Populate Order On Paper
for (let i = 0; i < toppings.length; i++) {
  let p = document.createElement("p");
  const toppingName =(toppings[i].textContent);
  paper.append(p);
  p.setAttribute("class", "margin");
  p.append(toppingName);
}

//Remove Toppings
for (let i = 0; i < toppings.length; i++) {
  //Const p below selects items on the menu
  const p = document.querySelectorAll(".margin");
  toppings[i].onclick = function() {
    this.setAttribute("class", "hide");
    p[i].setAttribute("class", "hide");
  }
}
    //console.log(orderItems[0].children[2]);

//Reset
reset.onclick = function() {
  for (let i = 0; i < toppings.length; i++) {
    if ((toppings[i].getAttribute("class") === "hide") ||
        (orderItems[0].children[i].getAttribute("class")) === "hide") {
          toppings[i].setAttribute("class", "item");
          orderItems[0].children[i].setAttribute("class", "margin");
    }
  }
}
