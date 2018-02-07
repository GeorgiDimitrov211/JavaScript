function radioCrystals(input) {
  let target = Number(input[0])
  let thickness = 0; 
  let count = 0;

  const cut = thickness => thickness /= 4
  const lap = thickness => thickness = thickness - thickness / 5
  const grind = thickness => thickness -= 20; 
  const etch = thickness => thickness -= 2;
  const xRay = thickness => thickness += 1;
  const transportAndWashing = thickness => Math.floor(thickness)

  for (let i = 1; i<input.length; i++){
    thickness = Number(input[i]);
    console.log(`Processing chunk ${thickness} microns`)
    if(target <= thickness / 4){
      while(target <= thickness/4){
        count++;
        thickness = cut(thickness);
      }
      console.log(`Cut x${count}`);
      thickness = transportAndWashing(thickness);
      console.log(`Transporting and washing`)
    }
    count = 0;
    if(target <= thickness - thickness / 5){
      while(target <= thickness - thickness / 5){
        count++;
        thickness = lap(thickness);
      }
      console.log(`Lap x${count}`);
      thickness = transportAndWashing(thickness);
      console.log(`Transporting and washing`)
    }
    count = 0;
    if(target <= thickness - 20){
      while(target <= thickness - 20){
        count++;
        thickness = grind(thickness);
      }
      console.log(`Grind x${count}`);
      thickness = transportAndWashing(thickness);
      console.log(`Transporting and washing`)
    }
    count = 0;
    if(target - 1 <= thickness - 2){
      while(target - 1 <= thickness - 2){
        count++;
        thickness = etch(thickness);
      }
      console.log(`Etch x${count}`);
      thickness = transportAndWashing(thickness);
      console.log(`Transporting and washing`)
    }
    count = 0;
    if(target === thickness){
    console.log(`Finished crystal ${thickness} microns`);
    } else {
      thickness = xRay(thickness);
      console.log(`X-ray x${1}`);
      console.log(`Finished crystal ${thickness} microns`);
    }
  }
}
radioCrystals(['1375', '50000']);
radioCrystals(['1000', '4000', '8100']);


