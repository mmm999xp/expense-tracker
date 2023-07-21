let totalAomunt = document.querySelector('#totalAmount')
const amounts = document.querySelectorAll('.cost')
let total = 0

amounts.forEach((item) => {
  total += Number(item.innerText)
  return total
})
totalAomunt.innerText = total