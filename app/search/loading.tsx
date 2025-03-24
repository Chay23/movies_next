import ListSkeleton from '../components/common/skeletons/list/ListSkeleton';

export default function Loading() {
  return (
    <>
      <div className='relative shadow-md mb-5 rounded-2xl animate-pulse bg-gray-300 min-w-0 w-full h-[82px]'></div>
      <div className='md:grid md:grid-cols-1/2 xl:grid-cols-1/4 gap-7'>
        <div className='rounded-2xl animate-pulse bg-gray-300 h-[200px]'></div>
        <ListSkeleton />
      </div>
    </>
  );
}
