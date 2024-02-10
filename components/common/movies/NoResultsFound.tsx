import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';

const NoResultsFound = () => {
  return (
    <article className='flex flex-col justify-center items-center pt-40'>
      <div className='relative'>
        <MovieCreationIcon
          fontSize='large'
          className='scale-150 absolute -top-7 -left-7 text-gray-700'
        />
        <SearchIcon className='scale-[10] text-gray-700' />
      </div>
      <h3 className='py-24'>No Results Found</h3>
    </article>
  );
};

export default NoResultsFound;
