import React from 'react';
import PropTypes from 'prop-types'
import './NavButton.css';

const NavButton = props => {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick ? props.onClick : null}>
      {props.children}
    </button>
  );
}

NavButton.propTypes = {
    onClick: PropTypes.func
}

export default NavButton;