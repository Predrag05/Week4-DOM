for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
        break;
    }
}
console.log('Ово је нешто следеће')

for(let i = 0; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}
console.log('Ово је нешто следеће')

for (let i = 1; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (i + j == 14) {
        break;
      }
      console.log(i, j);
    }
  }

  console.log('Ово испод је break outer.')

outer: for(let i = 1; i <= 3; i++) {
            for(let j = 1; j <= 3; j++) {
                if (i + j == 4) {
                    break outer;
                }
                console.log(i, j);
            }
}

console.log('Ово испод је break u while petlji.')


let i = 0;

while (i < 5) {
  i++;
  console.log(i);
  if (i == 3) {
    break;
  }
}


console.log('Ово испод је break u do-while petlji.')

let j = 0;

do {
  j++;
  console.log(j);
  if (j == 3) {
    break;
  }
} while (j < 5);