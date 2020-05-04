import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PageHeader from 'components/PageHeader';
import { Desktop, Mobile } from 'components/Responsible';
import SearchPane from 'components/SearchCommon/SearchPane';
import Layout from 'components/Layout';
import DesktopCountryList from 'containers/DesktopCountryList';
import MobileCountryList from 'containers/MobileCountryList';

export default function App({
  getAvailableCodes, codes, searchCountries, countries, setLocale, locale,
}) {
  useEffect(() => {
    getAvailableCodes();
  }, []);

  const onChangeLang = useCallback((lang) => () => setLocale(lang), [setLocale]);
  const { isLoading } = countries;

  return (
    <>
      <Layout>
        <PageHeader locale={locale} onChangeLang={onChangeLang} />
        <SearchPane codes={codes} onSearch={searchCountries} isLoading={isLoading} />
        <Desktop>
          <DesktopCountryList />
        </Desktop>
        <Mobile><MobileCountryList /></Mobile>
      </Layout>
    </>
  );
}

App.propTypes = {
  locale: PropTypes.string,
  setLocale: PropTypes.func.isRequired,
  countries: PropTypes.shape({
    isLoading: PropTypes.bool,
  }),
  getAvailableCodes: PropTypes.func.isRequired,
  searchCountries: PropTypes.func.isRequired,
  codes: PropTypes.arrayOf(PropTypes.string),
};
