class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(this.num);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  console.log(result);
}

f();
