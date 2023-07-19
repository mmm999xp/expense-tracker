module.exports = (obj)=>{

  let canSubmit = false

  // 驗證名稱欄位
  if (obj.name.trim() === "") {
    return canSubmit = false
  } 

  // 驗證日期欄位
  if (obj.date.trim() === "") {
    return canSubmit = false
  } 

  
  
  amount = Number(obj.amount)
  // 驗證金額欄位
  if (amount === "") {
    return canSubmit = false
  } else if (isNaN(amount)) {
    return canSubmit = false
  } else if (Number(amount) < 0) {
    return canSubmit = false
  } 

  return canSubmit = true
}