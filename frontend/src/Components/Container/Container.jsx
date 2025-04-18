import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container mx-auto py-10'>
      {children}
    </div>
  )
}

export default Container
