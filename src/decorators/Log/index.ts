const Log = (target: any, name: any, descriptor: any) => {
  // console.log({ target });

  const value = descriptor.value;

  descriptor.value = (...args: any[]) => {
    return value.apply(null, [...args]);
  }

  return descriptor;
};

export default Log;
