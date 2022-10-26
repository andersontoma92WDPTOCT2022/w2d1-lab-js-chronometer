//feito com Arash, Michela, Luana

class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // printTimeCallback é uma função q vem do index.js
    // necessário checar se foi passada
    this.intervalId = setInterval(() => {
      this.currentTime++;
      //checar se existe o printTimeCallback
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value.toString().padStart(2, '0');

  /*   computeTwoDigitNumber(value) {
      return ("0" + value).slice(-2,)
   }
  */


  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

getCentiseconds(){
  return (this.currentTime % 60) % ;
}

  split() {
    // ... your code goes here
    let minut = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());
    //console.log(`${minut}:${second}`);
    return `${minut}:${second}`;
  }
}
