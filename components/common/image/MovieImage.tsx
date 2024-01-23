import type { CSSProperties } from 'react';

import Image from 'next/image';

type Props = {
  imageSrc: string;
  serverWidth: number | string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  alt: string;
  style?: CSSProperties;
  priority?: boolean;
  sizes?: string;
  rest?: any[];
};

const MovieImage = ({
  imageSrc,
  serverWidth,
  width,
  height,
  className = '',
  alt,
  fill = false,
  style = {},
  priority = false,
  sizes,
  ...rest
}: Props) => {
  let imageWidth =
    typeof serverWidth === 'string' ? serverWidth : `w${serverWidth}`;

  if (imageSrc) {
    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${imageWidth}${imageSrc}`}
        width={width}
        height={height}
        className={className}
        alt={alt}
        fill={fill}
        style={style}
        sizes={
          sizes
            ? sizes
            : '(max-width: 768px) 30vw, (max-width: 1200px) 40vw, 60vw'
        }
        priority={priority}
        {...rest}
      />
    );
  }
  return (
    <Image
      src='/static/images/no-picture.png'
      width={width}
      height={height}
      className={className + 'border border-gray-200 rounded-xl'}
      fill={fill}
      style={{ objectFit: 'contain' }}
      alt='No image'
      sizes={
        fill ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : ''
      }
      priority={priority}
      {...rest}
    />
  );
};

export default MovieImage;
