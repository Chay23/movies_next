import Image from 'next/image';

type Props = {
  imageSrc: string;
  serverWidth: number;
  width?: number;
  height?: number;
  fill?: boolean;
  alt: string;
  style?: {};
  priority?: boolean;
  rest?: any[];
};

const MovieImage = ({
  imageSrc,
  serverWidth,
  width,
  height,
  alt,
  fill = false,
  style = {},
  priority = false,
  ...rest
}: Props) => {
  if (imageSrc) {
    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/w${serverWidth}${imageSrc}`}
        width={width}
        height={height}
        alt={alt}
        fill={fill}
        style={style}
        sizes={
          fill ? '(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 13vw' : ''
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
