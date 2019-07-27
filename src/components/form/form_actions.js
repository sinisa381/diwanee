export const update = (element, formdata) => {
  const newFormData = { ...formdata }
  const newElement = { ...formdata[element.id] }
  newElement.value = element.event.target.value
  newFormData[element.id] = newElement
  return newFormData
}
export const generateData = formdata => {
  let dataToSubmit = {}
  for (let key in formdata) {
    dataToSubmit[key] = formdata[key].value
  }
  const params = new URLSearchParams()
  params.append('pass', dataToSubmit.pass)
  params.append('user', dataToSubmit.user)
  return params
}
