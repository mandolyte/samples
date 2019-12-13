
let public_loop_count = 10;
let secret_early_stop = 2;

await (async function theLoop (i) {
  setTimeout(function () {
    console.log("Cheese!");
    if (--i) {          // If i > 0, keep going
        if ( i === (public_loop_count - secret_early_stop) ) {
            return;
        }
      theLoop(i);       // Call the loop again, and pass it the current value of i
    }
  }, 3000);
})(public_loop_count);

console.log("at end");

