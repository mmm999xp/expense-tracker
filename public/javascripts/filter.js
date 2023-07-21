const form = document.querySelector('#category-form')
const select = document.querySelector('#category-select')
select.addEventListener('change',()=>{
  if (select.value === 'all'){
    form.action = `/`
   return form.submit()
  }
  form.action = `/filter/${select.value}`
  form.submit()
})