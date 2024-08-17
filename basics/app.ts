const num1Elem = document.getElementById('num1') as HTMLInputElement
const num2Elem = document.getElementById('num2') as HTMLInputElement
const Add_Btn = document.querySelector('button')! 

const nums: number[] = []

function addNums(num1: number, num2: number){
    return num1 + num2
}

function print_obj(obj: { val: number; time: Date}){
    console.log(obj)
}

Add_Btn.addEventListener('click',() => {
    const num1 = num1Elem.value
    const num2 = num2Elem.value
    const result = addNums(+num1, +num2)
    console.log(result)
    print_obj({ val: result , time: new Date()})
    nums.push(result as number)
    console.log(nums)
}) 