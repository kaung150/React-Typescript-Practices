var add = function (num1, num2, ff) {
    var result = num1 + num2;
    ff(result);
};
add(20, 100, function (result) { return console.log(result); });
