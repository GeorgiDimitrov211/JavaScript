function roadRadar(input){
  let speed = Number(input[0]);
  let area = input[1];
  function getLimit(area){
    switch (area){
      case 'motorway' : return 130;
      case 'city' : return 50; 
      case 'interstate' : return 90;
      case 'residential' : return 20; 
    }
  }
  function getMessage(speed, limit){
    let difference = speed - limit;
    if (difference <= 0){
      return false;
    }else if (difference <= 20){
      return 'speeding';
    }else if (difference <= 40){
      return 'excessive speeding';
    }else{
      return 'reckless driving'; 
    }    
  }
  let limit = getLimit(area);
  let message = getMessage(speed, limit);
  if(message){
    console.log(message);
  }
}
roadRadar(['40', 'city']);
roadRadar(['21', 'residential']);  
roadRadar(['120', 'interstate']);  
roadRadar(['200', 'motorway']);  