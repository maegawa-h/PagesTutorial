setTimeout(() => console.log("test1"), 1000)
setTimeout(() => console.log("test2"), 2000)

var i = 0;
setInterval(() => {
    console.log(`test ${i}`);
    i++
}, 1000);