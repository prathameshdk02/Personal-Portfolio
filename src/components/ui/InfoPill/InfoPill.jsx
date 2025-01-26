import React from 'react'

const InfoPill = ({children}) => {
  return (
    <div className='text-xs font-bold rounded-2xl px-4 py-2 mr-2 bg-secondaryhead/70 inline-block w-max'>
      {children}
    </div>
  )
}

export default InfoPill
