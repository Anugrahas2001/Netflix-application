import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
    
        <img className='logo' src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="" />
        <ul className='contents'>
            <li>Home</li>
            <li>Whishlist</li>
            <li>About</li>
        </ul>
       
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      
    </div>
  )
}

export default Header
