import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

function LocaleSwitcher({ locale, onChange }) {
  return (
    <div className="locale-switcher">
      <span
        role="presentation"
        onClick={onChange('ru')}
        className={classnames('locale-switcher__button', {
          'locale-switcher__button_active': locale === 'ru',
        })}
      >
        RU
      </span>
      <span
        role="presentation"
        onClick={onChange('en')}
        className={classnames('locale-switcher__button', {
          'locale-switcher__button_active': locale === 'en',
        })}
      >
        EN
      </span>
    </div>
  );
}

LocaleSwitcher.propTypes = {
  locale: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default LocaleSwitcher;
