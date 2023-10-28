var createCounter = function (init) {
    var cur = init;
    function increment() {
        init = init + 1
        return init;
    }
    function reset() {
        return init = cur;
    }
    function decrement() {
        init = init - 1
        return init;
    }


    return {
        increment: increment,
        decrement: decrement,
        reset: reset,
    }

};

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
// 5 // 4

