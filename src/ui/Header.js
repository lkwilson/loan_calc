import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Loan Calculator</span>
        </div>
      </nav>
    );
  }
}

export default Header;