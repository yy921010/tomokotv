export function setFormDate (option = {}) {
  const formData = new FormData()
  if (option.data) {
    Object.keys(option.data).forEach(key => {
      formData.append(key, option.data[key])
    })
  }
  formData.append(option.filename, option.file, option.file.name)
  return formData
}

export function checkPwdStrong (obj) {
  const strongRegex = new RegExp(
    '^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
    'g'
  )
  const moderateRegex = new RegExp(
    '^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9]))(?=.*\\W)).*$',
    'g'
  )
  const easyRegex = new RegExp('(?=.{6,}).*', 'g')
  if (easyRegex.test(obj) === false) {
    // 不适合
    return 0
  } else if (strongRegex.test(obj)) {
    // 强
    return 1
  } else if (moderateRegex.test(obj)) {
    // 中
    return 2
  } else {
    // 弱
    return 3
  }
}
