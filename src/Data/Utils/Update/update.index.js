export default async (args) => {
  const module = await import(`./update.${args.field}`)
  return module.default(args)
}
