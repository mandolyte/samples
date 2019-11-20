

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
console.log("time 1")
// first use
sleep(5000).then(() => {
    console.log("time 2")
});

// inside an async function
/*
const doSomething = async () => {
    await sleep(2000)
    //do stuff
  }
  
  doSomething()
*/

console.log("time end")