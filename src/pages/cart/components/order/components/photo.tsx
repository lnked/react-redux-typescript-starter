import * as React from 'react'

export interface PhotoProps {
  src: string;
  id?: number;
  link?: string;
  width?: number;
  height?: number;
  title?: string;
}

export function Photo ({ id, src, link, width = 100, height = 100, title = '' }: PhotoProps) {
  return (
    <div className="checkout__block__item _item-photo">
      <div className="checkout__block__item__content _p-photo">
        <a href={link} className="checkout__block__item__image" data-product={id}>
          <img
            src={src}
            width={width}
            height={height}
            className="checkout__block__item__image__src"
            alt={title}
          />
        </a>
      </div>
    </div>
  )
}

export default Photo
