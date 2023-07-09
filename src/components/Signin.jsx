import { useState } from 'react'

/* eslint-disable react/prop-types */
function Signin({ onRouteChange, loadUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitSignIn = (e) => {
    e.preventDefault()
    fetch('https://smartbrain-api25.fly.dev/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          // does the user exist? Did we receive a user with a property of id?
          loadUser(user)
          onRouteChange('home')
        }
      })
  }

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-96 backdrop-blur bg-black/50 rounded shadow-lg p-5'>
          <h2 className='text-2xl text-white font-bold pb-5'>Sign In</h2>
          <form>
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

            <div className='flex items-center gap-3'>
              <button
                type='submit'
                onClick={onSubmitSignIn}
                className='text-white bg-[#9b59b6] duration-300 hover:bg-[#8e44ad] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center '
              >
                Submit
              </button>
              <div className='flex gap-1 text-white font-light'>
                <p>New here?</p>
                <p
                  className='underline cursor-pointer'
                  onClick={() => onRouteChange('register')}
                >
                  Register
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
