
import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import './styles.scss';
import LocaleSwitcher from './LocalSwitcher';

function PageHeader({ t, locale, onChangeLang }) {
  return (
    <header className="header">
      <h1 className="header__title">{t('countries')}</h1>
      <LocaleSwitcher locale={locale} onChange={onChangeLang} />
    </header>
  );
}

PageHeader.propTypes = {
  t: PropTypes.func,
  onChangeLang: PropTypes.func,
  locale: PropTypes.string,
};


export default withNamespaces()(PageHeader);
