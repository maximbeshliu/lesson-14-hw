let availableQuantity = 50;
let orderedQuantity = prompt("Please introduce Quantity");
let enough = "Great, we will soon ship your order";
let notEnough = "Sorry, we don’t have enough in stock";

availableQuantity =
  orderedQuantity <= availableQuantity
    ? console.log(enough)
    : console.log(notEnough);

/*if (orderedQuantity <= availableQuantity) {
  console.log(enough);
} else {
  console.log(notEnough);
}*/
