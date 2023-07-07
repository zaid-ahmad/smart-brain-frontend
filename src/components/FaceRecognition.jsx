/* eslint-disable react/prop-types */
function FaceRecognition({ imageUrl, box }) {
  return (
    <>
      <div className='flex justify-center mt-10'>
        {imageUrl ? (
          <>
            <div className='absolute mt-2'>
              <img
                src={imageUrl}
                alt='Your image with the face detected with a box.'
                className='rounded mb-10 shadow-md'
                id='inputImage'
                style={{ width: '500px' }}
              />
              <div
                className='absolute border-2 rounded border-teal-300 flex flex-wrap justify-center cursor-pointer'
                style={{
                  top: box.topRow,
                  right: box.rightCol,
                  bottom: box.bottomRow,
                  left: box.leftCol,
                }}
              ></div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default FaceRecognition
