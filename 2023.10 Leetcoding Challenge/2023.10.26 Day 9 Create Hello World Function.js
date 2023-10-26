/**
 * @return {Function}
 */
var createHelloWorld = function () {

    return function (...args) {
        if (createHelloWorld) {
            return console.log("Hello World");
        }
    }
};


const f = createHelloWorld();
f(["hello", 5, "Good"]); // "Hello World"
