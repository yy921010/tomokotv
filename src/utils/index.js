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
