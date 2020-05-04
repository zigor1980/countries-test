import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import Empty from 'components/Empty';
import { fieldFormatter } from './utils';
import './styles.scss';

const SKIPPED_KEYS = new Set(['topLevelDomain', 'callingCodes', 'translations', 'alpha3Code', 'area', 'gini']);

function CountryInfo({ country, t }) {
  if (!country) {
    return <Empty message="emptyCurrentCountry" />;
  }

  const {
    name, flag, region, subregion, altSpellings, ...countryInfo
  } = country;


  const altSpellingsLabel = altSpellings.join(',');
  const regionLabel = region && subregion ? `${region} - ${region}` : region || subregion;

  return (
    <div className="country-info">
      {flag && <div className="country-info__image"><img src={flag} alt={name} /></div>}
      <p className="country-info__name">{name}</p>
      {altSpellings.length > 0 && (
      <p>
        {altSpellingsLabel}
      </p>
      )}
      <p>
        {regionLabel}
      </p>
      <table className="country-description" style={{ width: '100%', textAlign: 'left' }}>
        <tbody>
          {Object.keys(countryInfo).map((key) => Boolean(countryInfo[key]) && !SKIPPED_KEYS.has(key) && (
            <tr key={key}>
              <td className="country-description__name">{t(key)}</td>
              <td>{fieldFormatter(key, countryInfo)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

CountryInfo.propTypes = {
  t: PropTypes.func.isRequired,
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    region: PropTypes.string,
    subregion: PropTypes.string,
    altSpellings: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default withNamespaces()(CountryInfo);
