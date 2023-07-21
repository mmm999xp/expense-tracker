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


//註冊畫面驗證


function validateEmail() {
  const email = document.querySelector('#email').value
  if (email.trim() === "") {
    document.querySelector('.email-error').textContent = '請輸入email'
    return false
  } else if (!email.includes('@')){
    document.querySelector('.email-error').textContent = '請輸入有效的電子郵件，應該要包含@'
    return false
  } else {
    document.querySelector('.email-error').textContent = ''
    return true
  }
}

function validatePassword() {
  const password = document.querySelector('#password').value

  if (password.trim() === "") {
    document.querySelector('.password-error').textContent = '請輸入password'
    return false
  } else {
    document.querySelector('.password-error').textContent = ''
    return true
  }
}

function validateConfirmPassword() {
  const confirmPassword = document.querySelector('#confirmPassword').value
  const password = document.querySelector('#password').value
  if (confirmPassword.trim() === "") {
    document.querySelector('.confirmPassword-error').textContent = '請輸入Confirm Password'
    return false
  } else if (confirmPassword !== password){
    document.querySelector('.confirmPassword-error').textContent = '密碼不相符'
    return false
  } else {
    document.querySelector('.confirmPassword-error').textContent = ''
    return true
  }

}

