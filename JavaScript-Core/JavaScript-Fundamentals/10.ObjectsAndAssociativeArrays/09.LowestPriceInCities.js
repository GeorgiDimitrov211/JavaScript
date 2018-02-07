function lowestPriceInCities(input){

  let summary = new Map();

  for(let row of input){
    let [town, product, price] = row.split(' | ');
    if (!summary.has(product)){
      summary.set(product, new Map());
    }
    summary.get(product).set(town, Number(price));
  }
  
  for(let [product, towns] of summary){

    let minPrice = Number.MAX_VALUE
    let minPriceTown = '';

    for (let [town, price] of towns) {
      if (price < minPrice) {
        minPrice = price
        minPriceTown = town
      }
    }
    console.log(`${product} -> ${minPrice} (${minPriceTown})`)
  }
}   
lowestPriceInCities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10']);
