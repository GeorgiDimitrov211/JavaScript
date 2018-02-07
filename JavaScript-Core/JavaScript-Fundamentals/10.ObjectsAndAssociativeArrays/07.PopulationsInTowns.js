function populationsInTowns(input){

  let map = new Map();

  for(let i = 0; i < input.length; i++){
    [name, pop] = input[i].split(' <-> ');
    if (!map.has(name)){
      map.set(name, 0)
    }
    map.set(name, map.get(name) + Number(pop));
  }
  [...map].forEach(([name, pop]) => console.log(`${name} : ${pop}`))
  
}   
populationsInTowns(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);

