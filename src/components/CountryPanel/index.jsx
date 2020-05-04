import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function CountryPanel({ children }) {
  return (
    <div className="country-panel">{children}</div>
  );
}

CountryPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CountryPanel;
