module.exports.getTemplate = (type = 'class', name) => {
  const template = []

  if (type === 'route') {
    template.push(
      `/* eslint-disable */`,
      `/* tslint:disable: max-line-length */\n`,
      `import { loadComponent } from 'utils'\n`,
      `export const routes: Route[] = [`,
      `\t{`,
      `\t\tpath: 'page',`,
      `\t\tcomponent: loadComponent(() =>`,
      `\t\t\timport(\n\t\t\t\t/* webpackChunkName: '${name}', webpackMode: 'lazy-once', webpackPrefetch: true */\n\t\t\t\t'./'\n\t\t\t)`,
      `\t\t),`,
      `\t\ttitle: 'Page title',`,
      `\t\tdescription: 'Page description',`,
      `\t}`,
      `]\n`,

    )
  }

  if (type === 'test') {
    template.push(
      `import * as React from 'react';`,
      `import renderer from 'react-test-renderer';\n`,
      `import ${name} from './';\n`,
      `test('it works', () => {`,
      `\tconsole.log(done);`,
      `\tconst rendered: any = renderer.create(<${name} />).toJSON();`,
      `\texpect(rendered).toBeTruthy();`,
      `});\n`,
    )
  }

  if (type === 'function') {
    template.push(
      `import * as React from 'react';\n`,

      `import { OuterProps } from './types';`,
      `import { StyledDiv } from './styled';\n`,

      `const ${name}: React.FC<OuterProps> = (props: OuterProps) => {`,
      `\t// const itemReferer = React.createRef<HTMLInputElement>();`,
      `\t// const [count, setCount] = useState(value);\n`,
      `\treturn (`,
      `\t\t<StyledDiv {...props} />`,
      `\t);`,
      `};\n`,
      `export default ${name};\n`,
    )
  }

  if (type === 'class') {
    template.push(
      `import * as React from 'react';\n`,
      `import { OuterProps, InnerState } from './types';`,
      `import { StyledDiv, StyledButton } from './styled';\n`,
      `class ${name} extends React.Component<OuterProps, InnerState> {\n`,

      `\tstatic defaultProps = {`,
      `\t\tvalue: '',`,
      `\t\tinteger: false,`,
      `\t}\n`,

      `\tref: any = React.createRef()\n`,

      `\tstate = {`,
      `\t\tvalue: '',`,
      `\t}\n`,

      `\tstatic getDerivedStateFromProps (props: OuterProps, state: InnerState) {`,
      `\t\tif (state.value !== props.value) {`,
      `\t\t\treturn {`,
      `\t\t\t\t...state,`,
      `\t\t\t\t...props,`,
      `\t\t\t};`,
      `\t\t}`,

      `\t\treturn null;`,
      `\t}\n`,

      `\tshouldComponentUpdate (props: OuterProps) {`,
      `\t\tconst { value } = this.props;`,
      `\t\treturn !(value === props.value);`,
      `\t}\n`,

      `\tcomponentDidMount () {`,
      `\t\tconsole.log('componentDidMount');`,
      `\t}\n`,

      `\tcomponentDidUpdate (props: OuterProps, state: InnerState) {`,
      `\t\tconsole.log('du', props, state);`,
      `\t}\n`,

      `\tcomponentWillUnmount () {}\n`,

      `\thandleClick = (e: any) => {`,
      `\t\tthis.setState((state: InnerState) => ({ ...state, value: e.target.value }))\n`,
      `\t\tif (this.props.handleClick) {`,
      `\t\t\tthis.props.handleClick(e);`,
      `\t\t}`,
      `\t}\n`,

      `\trender () {`,
      `\t\tconst { className } = this.props;\n`,
      `\t\treturn (`,
      `\t\t\t<StyledDiv className={cx({ test: true }, className)}>`,
      `\t\t\t\t<StyledButton onClick={this.handleClick} />`,
      `\t\t\t</StyledDiv>`,
      `\t\t);`,
      `\t}\n`,
      `}\n`,
      `export default ${name};\n`,
    )
  }

  if (['types.class', 'types.function'].indexOf(type) >= 0) {
    template.push(
      `export interface OuterProps {`,
      `\timg?: any;`,
      `\tvalue?: string;`,
      `\tenum?: 'button' | 'text';`,
      `\twidth?: number;`,
      `\tsimple?: boolean;`,
      `\thandleChange?: (e: Event) => void | boolean;`,
      `\tchildren?: JSX.Element[] | JSX.Element | any;`,
      `}\n`,
    )
  }

  if (type === 'types.class') {
    template.push(
      `export interface InnerState {`,
      `\tvalue?: string | number;`,
      `}\n`,
    )
  }

  if (type === 'styled') {
    template.push(
      `import styled from 'styled-components';\n`,
      `import { CommonStyles } from 'theme';\n`,
      `export const StyledDiv = styled.div\``,
      `\tcolor: \${CommonStyles.themeColor};`,
      `\`;\n`,
      `export const StyledButton = styled.button\`\`;\n`,
    )
  }

  return template.join('\n').replace(/\t/g, '  ')
}

module.exports.folderName = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
}

module.exports.componentName = (str) => {
  return str.replace(/(\b\w)/gi, (m) => m.toUpperCase()).replace(/\s+/g, '').replace(/-/g, '');
}
