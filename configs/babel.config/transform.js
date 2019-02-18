const transform = (prefix, preventFullImport) => {
  return {
    transform: importName => {
      const name = importName.replace(/\.?([A-Z])/g, (x, y) => `-${y.toLowerCase()}`).replace(/^-/, "")
      return `${prefix}/${name}`
    },
    preventFullImport,
  };
};

module.exports = {
  "./components": transform("./components", true),
  "@/pages\/?(((\\w*)?\/?)*)": transform("pages", false),
  "@/services\/?(((\\w*)?\/?)*)": transform("services", false),
  "@/fragments\/?(((\\w*)?\/?)*)": transform("fragments", false),
  "@/components\/?(((\\w*)?\/?)*)": transform("components", false),
  "@/containers\/?(((\\w*)?\/?)*)": transform("containers", false),
};
