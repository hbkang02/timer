// Instruction
// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//node timer1.js 10 3 5 15 9 // will beep at 3,5,9,10,15 seconds


//skip if no numbers
//skip if negative
//if input is not a number skip


var myArgs = process.argv.slice(2);

function beepTimer(times) {

  for (const time of times) {
    const delay = time * 1000;
    if(!isNaN(time) && time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
  }
};

beepTimer(myArgs);


