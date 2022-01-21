type Props = {
  payload: {
    name: string
  }
}

export default async function helloWorld({ payload }: Props) {
  const result = { name: `hello my name is ${payload.name}` }

  return result
}
