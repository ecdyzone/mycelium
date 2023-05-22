import React from 'react'

const Header = () => {
  return (
    <header className="bg-light-gray flex justify-center items-center ph2 pt3 pb4">
      <img
        src="amoonguss.png"
        className="flex-none mr2"
        style={{ height: '5rem' }}
      />
      <div>
        <span className="f2 b dark-green">mycelium</span>
        <span className="f2 b green ml2 relative" style={{ top: '0.75rem' }}>IB</span>
      </div>
      <img
        src="amoonguss.png"
        className="flex-none ml2"
        style={{ height: '5rem' }}
      />
    </header>
  )
}

export default Header
