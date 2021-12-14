export default function objectToArray(object) {
  const array = []
  for (const [key, value] of Object.entries(object)) {
    const obj = {}
    obj[key] = value
    array.push(obj)
  }

  return array
}
