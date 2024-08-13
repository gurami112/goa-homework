function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

let numbers = [1, 2, 3, 4];
let doubled = myMap(numbers, function(num) {
    return num * 2;
});

console.log(doubled);
