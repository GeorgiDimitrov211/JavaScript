function heroicInventory(input){

  let heroData =[];
  for (let i = 0; i < input.length; i++){

    let curArguments = input[i].split(' / ');
    let hero = {};
    hero.name = curArguments[0];
    hero.level = Number(curArguments[1]);

    if(curArguments.length > 2){
      hero.items = curArguments[2].split(', ')
    } else {
      hero.items = [];
    }

    heroData.push(hero);
  }
  console.log(JSON.stringify(heroData))
}   
heroicInventory(['Isacc / 25', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
