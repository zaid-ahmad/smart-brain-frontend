/* eslint-disable react/prop-types */
function Rank({ name, entries }) {
  return (
    <>
      <div className='text-center mb-5 text-[#f1f2f6]'>
        <p className='text-xl font-semibold'>{`${name}, your current entry count is...`}</p>
        <h3 className='text-4xl font-bold'>{entries}</h3>
      </div>
    </>
  )
}

export default Rank
