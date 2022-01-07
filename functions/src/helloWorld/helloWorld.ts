export default async function helloWorld({ payload }) {
  const result = { name: `hello my name is ${payload.name}` }

  return result
}
