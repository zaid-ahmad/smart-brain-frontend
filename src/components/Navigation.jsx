/* eslint-disable react/prop-types */
/* eslint-disable */
import Logo from './Logo'

function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <>
        <nav className='flex justify-between items-start p-5'>
          <Logo />
          <p
            onClick={() => onRouteChange('signout')}
            className='bg-zinc-900 bg-opacity-20 mt-2 px-5 py-1 backdrop-blur-lg rounded drop-shadow-lg font-semibold text-white cursor-pointer transition-all duration-200 hover:bg-opacity-60'
          >
            Sign Out
          </p>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav className='flex justify-between items-start p-5'>
          <Logo />
          <div className='flex gap-5'>
            <p
              onClick={() => onRouteChange('register')}
              className='bg-zinc-900 bg-opacity-70 mt-2 px-5 py-1 backdrop-blur-lg rounded drop-shadow-lg font-semibold text-white cursor-pointer transition-all duration-200 hover:bg-opacity-100'
            >
              Register for free
            </p>

            <p
              onClick={() => onRouteChange('signin')}
              className='bg-zinc-900 bg-opacity-50 mt-2 px-5 py-1 backdrop-blur-lg rounded drop-shadow-lg font-semibold text-white cursor-pointer transition-all duration-200 hover:bg-opacity-100'
            >
              Sign In
            </p>
          </div>
        </nav>
      </>
    )
  }
}

export default Navigation
