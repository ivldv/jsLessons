let number = 5
let fun
const elem = document.getElementById('result')
const elem1 = document.getElementById('input1')
const elem2 = document.getElementById('input2')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const submit = document.getElementById('submit')
submit.onclick = function(){
  elem.textContent = fun(Number(elem1.value),Number(elem2.value))
}
minus.onclick = function(){
  fun = resultFunction('-')
}
plus.onclick = function(){
  fun = resultFunction('+')
}
const resultFunction =  function(znak){
if(znak == '+') return function(a,b){
  return a+b
}
else return function(a,b){
  return a-b
}
}
console.dir(elem1)