import React from 'react';
import PropTypes from 'prop-types';
import CountryList from 'components/CountryList';
import CountryInfo from 'components/CountryInfo';
import CountryPanel from 'components/CountryPanel';

function CloseButton({ onClick, style = {} }) {
  return (
    <i style={style} className="close" role="presentation" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </i>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

function MobileCountryList({ countries, setCurrentCountry, currentCountry }) {
  return (
    <CountryPanel>
      <CountryList
        className="animated-pan"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: currentCountry ? 'translateX(-100%)' : undefined,
        }}
        countries={countries}
        onSelect={setCurrentCountry}
        current={currentCountry && currentCountry.alpha2Code}
      />
      <div
        className="animated-pan"
        style={{
          position: 'absolute',
          paddingTop: '20px',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden auto',
          transform: !currentCountry ? 'translateX(100%)' : undefined,
        }}
      >
        <CloseButton onClick={() => setCurrentCountry(null)} style={{ position: 'absolute', top: 0, right: '10px' }} />
        <CountryInfo country={currentCountry} />
      </div>
    </CountryPanel>
  );
}

MobileCountryList.propTypes = {
  currentCountry: PropTypes.shape({
    alpha2Code: PropTypes.string,
  }),
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  setCurrentCountry: PropTypes.func.isRequired,
};

export default MobileCountryList;
