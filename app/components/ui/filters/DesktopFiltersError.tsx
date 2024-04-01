export default function FiltersError() {
  return (
    <div className='hidden md:flex flex-col items-center justify-center bg-gray-300 rounded-xl h-[600px] p-11'>
      <p>Failed to load genres.</p>
      <p> Please reload the page.</p>
      <p className='text-xs mt-4'>If the error persists, contact us.</p>
    </div>
  );
}
