import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Empty from 'components/Empty';
import './styles.scss';

function CountryList({
  countries = [], onSelect, style, current, className,
}) {
  if (countries.length === 0) {
    return <div className={className} style={style}><Empty message="emptyCountries" /></div>;
  }

  const onClick = useCallback((code) => () => onSelect(code), [onSelect]);

  return (
    <ul className={classnames('countries-list', className)} style={style}>
      {countries.map(({
        name, flag, alpha2Code,
      }) => (
        <li
          key={alpha2Code}
          className={classnames('countries-item', {
            'countries-item_active': alpha2Code === current,
          })}
          role="presentation"
          onClick={onClick(alpha2Code)}
        >
          <div className="countries-item__image" style={{ backgroundImage: `url(${flag})` }} />
          <div className="countries-item__desciption">
            {name}
          </div>
        </li>
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  className: PropTypes.string,
  current: PropTypes.string,
  style: PropTypes.shape({
    name: PropTypes.string, flag: PropTypes.string, alpha2Code: PropTypes.string,
  }),
  countries: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired,
};

export default CountryList;
