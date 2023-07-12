const titleInput = document.querySelector('#title')
const createBtn = document.getElementById('create')
const list = document.getElementById('list')
const dangerBtn = document.getElementsByClassName('btn-danger')

smallBtn.forEach(element => {
  element.onclick(()=>{
    console.log(element)
  })
})
smallBtn.forEach(function(element){

})
createBtn.onclick = function() {
  const newList = document.createElement('li')
  newList.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>Название</span>
  <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
  </span>
</li>`
document.insert(titleInput)
  newList.
}