import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type Props = {
  status?: number;
  info: Record<string, string | number | boolean>;
};

const Error = ({ status, info }: Props) => {
  return (
    <article className='h-screen flex flex-col justify-center items-center gap-2'>
      <ErrorOutlineIcon fontSize='large' />
      <div className='flex items-center gap-4'>
        {status ? <h1 className='text-gray-600'>{`${status} | `}</h1> : null}
        <h4 className='text-gray-700'>{info.status_message}</h4>
      </div>
    </article>
  );
};

export default Error;
