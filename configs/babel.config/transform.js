const transform = (prefix, preventFullImport) => {
  return {
    transform: importName => `${prefix}/${importName.toLowerCase()}`,
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
