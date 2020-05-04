import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import './styles.scss';

function Empty({ children, t, message }) {
  return (
    <div className="empty-panel">{message ? t(message) : children}</div>
  );
}

Empty.propTypes = {
  t: PropTypes.func,
  message: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default withNamespaces()(Empty);
