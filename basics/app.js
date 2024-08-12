var num1Elem = document.getElementById('num1');
var num2Elem = document.getElementById('num2');
var Add_Btn = document.querySelector('button');
function addNums(num1, num2) {
    return num1 + num2;
}
Add_Btn.addEventListener('click', function () {
    var num1 = num1Elem.value;
    var num2 = num2Elem.value;
    console.log(addNums(+num1, +num2));
});
