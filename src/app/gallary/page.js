// 'use-client'
import Image from 'next/image'
import nextImage from '../../assets/nextjsImage.png'
const Gallary = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-bold"> All Gallary</h1>
      <h1 className="text-6xl text-center font-bold mt-10"> Regular Image tag</h1>
      <img
        src={"https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"}
        alt=""
        className="mx-auto mt-5"
        width={"500"}
        height={'500'}
      />
      <h1 className="text-6xl text-center font-bold mt-10"> Next js Image Components</h1>
      <Image src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
      alt="next Imageeeeeeeeeeee"
      width={"500"}
      height={'500'}
      className='mx-auto mt-5'
      />
      <h1 className="text-6xl text-center font-bold mt-10">Loccally Next js Image Components</h1>
      <Image src={nextImage}
      alt="next Imageeeeeeeeeeee"
      width={"500"}
      height={'500'}
      className='mx-auto mt-5'
      />


    </div>
  );
};

export default Gallary;
