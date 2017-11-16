function fruitOrVegetable(food){
  switch (food){
    case "banana" : food = "fruit"
    break;
    case "apple" : food = "fruit"
    break;
    case "kiwi" : food = "fruit"
    break;
    case "cherry" : food = "fruit"
    break;
    case "lemon" : food = "fruit"
    break;
    case "grapes" : food = "fruit"
    break;
    case "peach" : food = "fruit"
    break;
    case "tomato" : food = "vegetable"
    break;
    case "cucumber" : food = "vegetable"
    break;
    case "pepper" : food = "vegetable"
    break;
    case "onion": food = "vegetable"
    break;
    case "garlic" : food = "vegetable"
    break;
    case "parsley" : food = "vegetable"
    break;
    default:
      food = "unknown";
  }
  return food;
}
console.log(fruitOrVegetable('banana'));
console.log(fruitOrVegetable('cucumber'));
console.log(fruitOrVegetable('pizza'));