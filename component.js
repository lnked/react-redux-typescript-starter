const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "dist", "test");

const files = [
  "index.tsx",
  "index.test.tsx",
  "styles.ts",
];

const getContent = ({ name, ComponentName }) => {
  return [
    `import * as React from 'react'\n`,
    `export interface Props { name: boolean; }`,
    `export interface State { name: boolean; }\n`,
    `class ${ComponentName} extends React.Component<Props, State> {\n`,
    `\trender () {`,
    `\t\treturn (<div />)`,
    `\t}\n`,
    `}\n`,
    `export default ${ComponentName}\n`,
  ].join("\n").replace(/\t/g, "  ");
};

fs.mkdirSync(dir);

files.forEach(name => {
  fs.writeFileSync(path.resolve(dir, name), getContent({ name, ComponentName: "Checkbox" }));
});
