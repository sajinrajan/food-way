import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order You Favourite Food Here</h2>
        <p>Food is more than just sustenance; it’s an experience. My favorite food is [your favorite food], and I love it because of 
          its rich flavors,
          comforting texture, and the way it brings back memories. A perfect blend of taste and aroma, it never fails to lift my mood 
          and satisfy my cravings!</p>
          <button> view menu</button>
      </div>
    </div>
  )
}

export default Header
