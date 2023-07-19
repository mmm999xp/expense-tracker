function validateForm() {
  // 獲取輸入值
  const name = document.querySelector('#name').value
  const date = document.querySelector('#date').value
  const category = document.querySelector('#category').value
  const amount = document.querySelector('#amount').value
  let canSubmit = false
  
  // 驗證名稱欄位
  if (name.trim() === "") {
    document.querySelector('.name-error').textContent = '請輸入支出名稱'
    return canSubmit = false
  } else {
    document.querySelector('.name-error').textContent = ''
  }

  // 驗證日期欄位
  if (date.trim() === "") {
    document.querySelector('.date-error').textContent = '請選擇支出日期'
    return canSubmit = false
  } else {
    document.querySelector('.date-error').textContent = ''
  }



  // 驗證金額欄位
  if (amount.trim() === "") {
    document.querySelector('.amount-error').textContent = '請輸入支出金額'
    return canSubmit = false
  } else if (isNaN(amount)) {
    document.querySelector('.amount-error').textContent = '這個欄位只能輸入數字'
    return canSubmit = false
  } else if (Number(amount) < 0) {
    document.querySelector('.amount-error').textContent = '請輸入大於0的數字'
    return canSubmit = false
  } else {
    document.querySelector('.amount-error').textContent = ''
  }

  return canSubmit = true
}