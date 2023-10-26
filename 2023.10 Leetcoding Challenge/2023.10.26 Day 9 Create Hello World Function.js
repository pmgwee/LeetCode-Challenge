/**
 * @return {Function}
 */
var createHelloWorld = function () {

    return function (...args) {
        if (createHelloWorld) {
            return "Hello World"
        }
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */