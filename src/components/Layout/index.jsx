import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function DesktopLayout({ children }) {
  return (
    <div className="layout-desktop">
      <div className="layout-desktop__content">
        {children}
      </div>
    </div>
  );
}

DesktopLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default DesktopLayout;
