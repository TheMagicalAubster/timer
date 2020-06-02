let timerInterval = [];
let max = process.argv[2];

if (process.argv.length === 2) {
  console.log('Please input time in ms');
  return;
} else if (isNaN(process.argv[2])) {
  console.log('Only numbers please');
  return;
}

for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] < 0) {
    console.log('time cannot be negative.');
    return;
  }
  timerInterval.push(parseFloat(process.argv[i]));
}

max = Math.max.apply(Math, timerInterval); //sets the new line char to be after maximum time


for (let t of timerInterval) {
  setTimeout(() => {
    process.stdout.write('BEEP ');
  }, t);
}

setTimeout(() => process.stdout.write('\n'), max + 500);
    


//process.stdout.write('\x07'); //supposed to make sound


