import React from 'react';
import { Picture, Source, Loading } from './styles';
import ProgressiveImage from 'react-progressive-image';

export interface OuterProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  circle?: boolean;
  className?: string;
}

const Image: React.FC<OuterProps> = ({ src, className, ...props }: OuterProps) => {
  return (
    <Picture className={className}>
      <ProgressiveImage src={src} placeholder={src}>
        {(resource = '', loading = true) => {
          if (loading) {
            return (
              <Loading>Loading...</Loading>
            );
          }

          return (
            <Source
              {...props}
              src={resource}
            />
          );
        }}
      </ProgressiveImage>
    </Picture>
  );
};

Image.displayName = 'Image';

Image.defaultProps = {
  alt: '',
  className: '',
};

export default Image;
