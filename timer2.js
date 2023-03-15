const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  const unicode = key;
  console.log(unicode);
  // press ctrl + c it exits
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }

  // press b and it beeps
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // input number and it should output and then beep after that time
  if (Number(key)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);  
  }
});

console.log('Interactive Timer!');