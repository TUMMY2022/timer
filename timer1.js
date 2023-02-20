let useInput  = process.argv.splice(2);
const timer = function(array) {
  if (array.length === 0) {
    return process.stdout.write(`please enter the time`);
  }
  useInput.forEach((item) => {
    if (isNaN(item)) {
      return process.stdout.write(`the time Undefined`);
    } else if (item < 0) {
      return  process.stdout.write(`We can't schedule anything in the past ${item} please fix the time`);
    }
    let mSec = item * 1000;
    setTimeout(() => {
      process.stdout.write(`make sound of ${item} seconds` + '\n');
    }, mSec);
  });
};
timer(useInput);