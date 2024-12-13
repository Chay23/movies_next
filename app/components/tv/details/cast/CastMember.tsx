import type { tv } from '@/typings/tv/tv';

import MovieImage from '@/components/common/image/MovieImage';

import { getCastRoles } from '../utils';

type Props = {
  castMember: tv.Cast;
};

export default function CastMember({ castMember }: Props) {
  return (
    <article className='rounded-lg overflow-hidden px-2'>
      <div className='relative aspect-2/3 rounded-lg overflow-hidden'>
        <MovieImage
          imageSrc={castMember.profile_path}
          serverWidth={200}
          fill
          alt={castMember.name}
        />
      </div>
      <div className='pt-3'>
        <p className='font-medium'>{castMember.name}</p>
        <p>{getCastRoles(castMember.roles)}</p>
      </div>
    </article>
  );
}
