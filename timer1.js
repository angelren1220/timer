const numbers = process.argv.slice(2);
for (number of numbers) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(number) * 1000);
}