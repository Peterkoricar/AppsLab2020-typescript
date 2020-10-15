//import Collections = require('typescript-collections');
console.log(totalDistance(100, 5, 2));
console.log(equality(10, 5, 10));
console.log(triangle(12, 3, 9));
console.log(multiply([3, 1, 5, 8, 6]));
console.log(slices(15, 5, 6));
console.log(palindrome("jelenovi pivo nelej"));
console.log(rps("scissors", "paper"));
console.log(minMax([10, 5, 1, 2, 15]));
function totalDistance(towerHeigh, stairHeigh, stairLength) {
    return (((towerHeigh / stairHeigh) * stairLength) + towerHeigh);
}
function equality(a, b, c) {
    var i = 0;
    if (a == b)
        i++;
    if (b == c)
        i++;
    if (c == a)
        i++;
    if (i == 1)
        i++;
    return i;
}
function triangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b)
        return true;
    else
        return false;
}
function multiply(numL) {
    for (var i = 0; i < numL.length; i++) {
        numL[i] = numL[i] * numL.length;
    }
    return numL;
}
function slices(slicesT, people, slicesE) {
    return slicesT >= people * slicesE;
}
function palindrome(original) {
    var reverse = "";
    for (var i = original.length - 1; i >= 0; i--) {
        reverse += original.charAt(i);
    }
    if (reverse == original)
        return true;
    else
        return false;
}
function rps(p1, p2) {
    var scissors = "scissors";
    var paper = "paper";
    var rock = "rock";
    if (p1 == scissors && p2 == "rock" || p1 == "paper" && p2 == "scissors" || p1 == "rock" && p2 == "paper") {
        return "p2 wins";
    }
    else
        return "p1 wins";
}
function minMax(a) {
    return (Math.max.apply(null, a) - Math.min.apply(null, a));
}
//# sourceMappingURL=helloAppslabTs.js.map