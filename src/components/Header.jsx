import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar" role="navigation">
          <div className="container">
            <a href="/" className="title">Address Book</a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header