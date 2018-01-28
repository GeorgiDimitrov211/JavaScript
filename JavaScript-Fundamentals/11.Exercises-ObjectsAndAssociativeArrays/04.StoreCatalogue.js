function storeCatalogue(input){
  
  let arr = [];

  for (let line of input){

    let obj = {}
    let [product, price] = line.split(' : ')
    
    obj.name = product;
    obj.price = price;
    arr.push(obj);
  }

  arr = arr.sort(function(a, b){

    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0
  });
  
  let letter = arr[0].name[0];
  console.log(letter)
  for(let y of arr){
    if(letter !== y.name[0]){
      letter = y.name[0]
      console.log(letter)
    }
    console.log(`  ${y.name}: ${y.price}`)
  }
  
}   
storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
