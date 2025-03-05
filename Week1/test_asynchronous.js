var async = function () {
    setTimeout(function () {log("I am coming out later although I have been called before the next one")}, 2000)
}
var adder = function (first, second) {
    var sum = first + second
    return sum;
}
var log = function (msg) {
    console.log("[Log] : ", msg)
}

log("the sum is " + adder(5,6))
async();
log("This is going to ocme out before the previous one")