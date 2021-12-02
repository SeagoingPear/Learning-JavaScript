let nums = ['1', '2', '3', '4', '5']
let ops = ['+', '*', '+', '/', '']
let exp = ''

for (let i = 0; i < nums.length; i++) {
    exp += nums[i] + ops[i]
}
console.log(eval(exp))