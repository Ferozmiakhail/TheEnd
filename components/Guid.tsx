

interface Props {
  RxVideo: any;
}

const Guide = ({ RxVideo }: Props) => {
  return (
    <>
    <button className='font-[400] flex h-[30px] items-center text-[19px]'>
      <RxVideo className='text-[20px]' />
      <span className=' text-[#808080]'>Buying Guide</span>
    </button>
    </>
  );
};
export default Guide;
