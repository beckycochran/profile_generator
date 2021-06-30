const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Nice to meet'cha, ${answer}!`);
  rl.question('What\'s an activity you enjoy? ', (answer) => {
  console.log(`Oh? ${answer} sounds pretty nice, never tried it.`);
rl.question('What meal is your favorite? ', (answer) => {
  console.log(`Yum, ${answer}!! Gimme.`);
rl.question('If you could have a superpower, what would it be? ', (answer) => {
  console.log(`Man, I wish I had the superpower of ${answer}.`);
  rl.close();
})})})})
