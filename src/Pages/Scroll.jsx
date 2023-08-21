import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
function Scroll() {
  const handleTop = () => {
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='position-fixed bottom-7 end-4 bg-primary  rounded-circle p-1 z-50'>
      <AiOutlineArrowUp onClick={handleTop} className='fs-1 text-white cursor-pointer'></AiOutlineArrowUp>
    </div>
  )
}

export default Scroll