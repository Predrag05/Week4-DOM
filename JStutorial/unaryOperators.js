let person = {
    name: 'John',
    toString: function () {
      return '25';
    },
  };
  
  console.log(person); // Цео објекат
  console.log(+person); // Само метод

  let x = 10;
  let y = -x;

  console.log(y); // -10