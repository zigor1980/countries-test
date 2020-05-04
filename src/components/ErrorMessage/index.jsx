import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';


function ErrorMessage({ t, message }) {
  return (
    <>{t(message)}</>
  );
}

ErrorMessage.propTypes = {
  t: PropTypes.func,
  message: PropTypes.string,
};

export default withNamespaces()(ErrorMessage);
