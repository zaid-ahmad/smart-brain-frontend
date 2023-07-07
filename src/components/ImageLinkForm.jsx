/* eslint-disable react/prop-types */
function ImageLinkForm({ url, handleChange, handleSubmit }) {
  return (
    <>
      <p className='text-center text-2xl font-semibold pb-5'>
        This magic brain will detect faces in your pictures. Give it a try!
      </p>
      <div className='flex justify-center items-center gap-5'>
        <input
          type='text'
          placeholder='Image URL...'
          onChange={(e) => handleChange(e.target.value)}
          value={url}
          className='w-96 h-11 p-2 rounded outline-none duration-300 focus:drop-shadow-lg'
        />
        <button
          id='detect'
          onClick={handleSubmit}
          className='w-48 h-11 duration-300 rounded font-semibold text-lg text-[#f1f2f6] bg-gradient-to-l from-violet-800 via-purple-900 to-violet-600 hover:translate-y-[-0.150rem] focus:translate-y-0.5'
        >
          Detect
        </button>
      </div>
    </>
  )
}

export default ImageLinkForm
