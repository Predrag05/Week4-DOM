let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Tuesday



let brojDana = 5;
let imeDana;

switch(brojDana){
    case 1:
        imeDana = "Ponedeljal";
        break;

    case 2:
        imeDana = "Utorak";
        break;

    case 3:
        imeDana = "Sreda";
        break;

    case 4:
        imeDana = "Cetvrtak";
        break;

    case 5:
        imeDana = "Petak";
        break;

    case 6:
        imeDana = "Subota";
        break;

    case 7:
        imeDana = "Nedelja";
        break;

      default:
        imeDana = "Moraju brojevi od 1-7";
}

console.log(imeDana)