var num1Elem = document.getElementById('num1');
var num2Elem = document.getElementById('num2');
var Add_Btn = document.querySelector('button');
var nums = [];
function addNums(num1, num2) {
    return num1 + num2;
}
function print_obj(obj) {
    console.log(obj);
}
Add_Btn.addEventListener('click', function () {
    var num1 = num1Elem.value;
    var num2 = num2Elem.value;
    var result = addNums(+num1, +num2);
    console.log(result);
    print_obj({ val: result, time: new Date() });
    nums.push(result);
    console.log(nums);
});
