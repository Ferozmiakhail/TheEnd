import Link from 'next/link';

interface Props {
  TiArrowBack: any;
  useRouter: any;
}

const BackButton = ({ TiArrowBack, useRouter }: Props) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };


  const canGoBack = () => {
    return typeof window !== 'undefined' && window.history.length > 1;
  };

  return (
    <>
      {canGoBack() ? (
        <button className='font-[400] flex h-[30px] items-center text-[19px]' onClick={goBack}>
          <TiArrowBack className='text-[20px]' />
          <span className=''>Back</span>
        </button>
      )
      :
      (
        <Link className='font-[400] flex h-[30px] items-center text-[19px]'  href="/">
          <TiArrowBack className='text-[20px]' />
          <span className=''>Back</span>
        </Link>
      )
      }
    </>
  );
};
export default BackButton;
