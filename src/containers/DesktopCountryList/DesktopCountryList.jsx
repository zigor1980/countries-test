import React from 'react';
import PropTypes from 'prop-types';
import CountryList from 'components/CountryList';
import CountryInfo from 'components/CountryInfo';
import CountryPanel from 'components/CountryPanel';

function DesktopCountryList({ countries, setCurrentCountry, currentCountry }) {
  return (
    <CountryPanel>
      <CountryList
        style={{
          position: 'absolute', top: 0, left: 0, right: '50%', bottom: 0,
        }}
        countries={countries}
        onSelect={setCurrentCountry}
        current={currentCountry && currentCountry.alpha2Code}
      />
      <div style={{
        position: 'absolute', top: 0, right: 0, left: '50%', bottom: 0, overflow: 'hidden auto',
      }}
      >
        <CountryInfo country={currentCountry} />
      </div>
    </CountryPanel>
  );
}

DesktopCountryList.propTypes = {
  currentCountry: PropTypes.shape({
    alpha2Code: PropTypes.string,
  }),
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  setCurrentCountry: PropTypes.func.isRequired,
};

export default DesktopCountryList;
