import React from 'react'

const Container = ({className, children}) => {
  return (
    <div>
        <div className={`max-w-[1920px] max-auto bg-pink-500 ${className}`}>
        {children}
        </div>
    </div>
  )
}

export default Container