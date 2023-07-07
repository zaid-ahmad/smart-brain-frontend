import { useState } from 'react'
/* eslint-disable react/prop-types */

function Register({ onRouteChange, loadUser }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmitRegister = (e) => {
    e.preventDefault()
    fetch('https://smart-brain-backend.up.railway.app/register', {
      method: 'post',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user)
          onRouteChange('home')
        } else {
          setError('Email/Password is incorrect.')
        }
      })
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-96 backdrop-blur bg-black/50 rounded shadow-lg p-5'>
          <h2 className='text-2xl text-white font-bold pb-5'>Register</h2>
          <form>
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Andrew Jackson'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='andrew@mail.com'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='*********'
                required
              />
            </div>

            <div>
              <p className='text-red-500 pb-5'>{error}</p>
            </div>

            <div className='flex items-center gap-3'>
              <button
                type='submit'
                onClick={onSubmitRegister}
                className='text-white bg-[#9b59b6] duration-300 hover:bg-[#8e44ad] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
              >
                Register
              </button>
              <div className='flex gap-1 text-white font-light'>
                <p>Already have an account?</p>
                <p
                  className='underline cursor-pointer'
                  onClick={() => onRouteChange('signin')}
                >
                  Sign in
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
