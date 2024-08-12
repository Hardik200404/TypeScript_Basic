const num1Elem = document.getElementById('num1') as HTMLInputElement
const num2Elem = document.getElementById('num2') as HTMLInputElement
const Add_Btn = document.querySelector('button')! 

function addNums(num1:number,num2:number){
    return num1 + num2;
}

Add_Btn.addEventListener('click',() => {
    const num1 = num1Elem.value
    const num2 = num2Elem.value
    console.log(addNums(+num1, +num2))
}) 