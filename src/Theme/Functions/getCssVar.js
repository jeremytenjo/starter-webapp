export default (value) =>
  getComputedStyle(document.body).getPropertyValue(value)
