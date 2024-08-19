"use strict";
const num1Elem = document.getElementById('num1');
const num2Elem = document.getElementById('num2');
const Add_Btn = document.querySelector('button');
const nums = [];
function addNums(num1, num2) {
    return num1 + num2;
}
function print_obj(obj) {
    console.log(obj);
}
Add_Btn.addEventListener('click', () => {
    const num1 = num1Elem.value;
    const num2 = num2Elem.value;
    const result = addNums(+num1, +num2);
    console.log(result);
    print_obj({ val: result, time: new Date() });
    nums.push(result);
    console.log(nums);
});
