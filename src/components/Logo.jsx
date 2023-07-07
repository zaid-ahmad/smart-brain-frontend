import Tilt from 'react-parallax-tilt'
import LogoIcon from '../assets/logo.png'

function Logo() {
  return (
    <>
      <div className='w-84'>
        <Tilt className='w-40'>
          <div className='flex flex-col justify-center items-center w-40 h-40 bg-zinc-900 bg-opacity-80 backdrop-blur-lg drop-shadow-xl rounded-lg ml-7'>
            <img src={LogoIcon} alt='Logo' className='w-42' />
            <h1 className='text-xl font-bold text-[#f5f6fa]'>Smart Brain</h1>
          </div>
        </Tilt>
      </div>
    </>
  )
}

export default Logo
