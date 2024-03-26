// Code your solutions in this fil
function countDown( startnum ) {
    while ( startnum > 0 ) {
      console.log( startnum );
      startnum -= 1;
    }
    console.log( startnum );
  }
  function writeCards(name, surprise) {
    return [
        `Thank you, ${name[0]}, for the wonderful ${surprise} gift!`,
        `Thank you, ${name[1]}, for the wonderful ${surprise} gift!`,
        `Thank you, ${name[2]}, for the wonderful ${surprise} gift!`
    ];
}

const messages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(messages);