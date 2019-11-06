const supportedProps: string[] = [
  'action',
  'allowfullscreen',
  'alt',
  'async',
  'autocomplete',
  'autofocus',
  'autoplay',
  'charset',
  'cite',
  'cols',
  'content',
  'controls',
  'coords',
  'data',
  'datetime',
  'datettime',
  'dir',
  'disabled',
  'enctype',
  'for',
  'height',
  'high',
  'href',
  'http-equiv',
  'label',
  'loop',
  'low',
  'max',
  'maxlength',
  'media',
  'method',
  'min',
  'minlength',
  'multiple',
  'muted',
  'muted',
  'name',
  'novalidate',
  'open',
  'placeholder',
  'poster',
  'preload',
  'readonly',
  'rel',
  'required',
  'reversed',
  'rows',
  'shape',
  'size',
  'sizes',
  'span',
  'spellcheck',
  'src',
  'srcset',
  'start',
  'target',
  'title',
  'type',
  'value',
  'volume',
  'width',
  'wrap',
];

export interface OuterProps {
  [key: string]: any;
}

export const removeNonHTMLProps = (props: OuterProps) => {
  const entries: any = {};

  for (const name in props) {
    if (supportedProps.includes(name)) {
      entries[name] = props[name];
    }
  }

  return entries;
};
