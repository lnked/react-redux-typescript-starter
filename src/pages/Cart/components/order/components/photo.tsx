import * as React from 'react';

export interface OuterPropshotoProps {
  src: string;
  id?: number;
  link?: string;
  width?: number;
  height?: number;
  title?: string;
}

export function Photo({ id, src, link, width = 100, height = 100, title = '' }: PhotoProps) {
  return (
    <div>
      <div>
        <a href={link} data-product={id}>
          <img
            src={src}
            width={width}
            height={height}

            alt={title}
          />
        </a>
      </div>
    </div>
  );
}

export default Photo;
