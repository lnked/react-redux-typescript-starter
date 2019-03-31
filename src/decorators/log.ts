const log = (target: any, name: any, descriptor: any) => {
  console.log({ target })

  const value = descriptor.value

  descriptor.value = () => {
    console.log(`Calling "${name}" with`, arguments)
    return value.apply(null, arguments)
  }

  return descriptor
}

export default log
