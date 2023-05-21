import React from 'react'

const Header = () => {
  return (
    <header className="bg-light-gray flex justify-center items-center ph2 pt3 pb4">
      <img
        src="poring.gif"
        className="flex-none mr4"
        style={{ height: '3.5rem' }}
      />
      <div>
        <span className="f2 b dark-green">arvoreIB</span>
        <span className="f2 b green ml1 relative" style={{ top: '0.5rem' }}>
          2
        </span>
      </div>
    </header>
  )
}

export default Header
