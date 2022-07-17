import React from 'react';
import "./Header.css";
import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Header = () => {
    return <span onClick={() => window.scroll(0,0)}  className="header"> 🎬Entertainment Hub🎥 </span>;
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
// #endregion

export default Header;