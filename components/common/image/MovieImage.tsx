import Image from 'next/image';

type Props = {
  imageSrc: string;
  serverWidth: number;
  width?: number;
  height?: number;
  fill?: boolean;
  alt: string;
  style?: {};
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
        {...rest}
      />
    );
  }
  return (
    <Image
      src='/static/images/no-picture.png'
      width={width}
      height={height}
      fill
      style={{ objectFit: 'contain' }}
      alt='No image'
      {...rest}
    />
  );
};

export default MovieImage;
