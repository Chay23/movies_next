import Image, { ImageProps } from 'next/image';

type Props = {
  imageSrc: string;
  serverWidth: number | string;
} & Omit<ImageProps, 'src'>;

const MovieImage = ({
  imageSrc,
  serverWidth,
  className = '',
  alt,
  sizes,
  ...rest
}: Props) => {
  let imageWidth =
    typeof serverWidth === 'string' ? serverWidth : `w${serverWidth}`;

  if (imageSrc) {
    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}/${imageWidth}${imageSrc}`}
        className={className}
        alt={alt}
        sizes={
          sizes ?? '(max-width: 768px) 30vw, (max-width: 1200px) 40vw, 60vw'
        }
        {...rest}
      />
    );
  }

  return (
    <Image
      src='/static/images/no-picture.png'
      className={className + 'border border-gray-200 rounded-xl'}
      style={{ objectFit: 'contain' }}
      alt='No image'
      sizes={
        sizes ?? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      }
      {...rest}
    />
  );
};

export default MovieImage;
