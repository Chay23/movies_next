type Props = {
  status: number;
  info: Record<string, string | number | boolean>;
};

const Error = ({ status, info }: Props) => {
  return (
    <article className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-gray-600 pb-2'>{status}</h1>
      <h4 className='text-gray-700'>{info.status_message}</h4>
    </article>
  );
};

export default Error;
