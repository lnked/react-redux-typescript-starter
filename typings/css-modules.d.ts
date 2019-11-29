declare module '*.css' {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
