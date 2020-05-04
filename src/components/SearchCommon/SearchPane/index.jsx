import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { withNamespaces } from 'react-i18next';
import './styles.scss';
import SearchByCodeForm from '../SearchByCodeForm';
import SearchByCurrencyForm from '../SearchByCurrencyForm';
import SearchByNameForm from '../SearchByNameForm';

const { TabPane } = Tabs;


function SearchPane({ codes, onSearch, t }) {
  return (
    <Tabs type="card" className="search-panel">
      <TabPane tab={t('searchByName')} key="1">
        <SearchByNameForm onSubmit={onSearch} />
      </TabPane>
      <TabPane tab={t('searchByCurrency')} key="2">
        <SearchByCurrencyForm onSubmit={onSearch} />
      </TabPane>
      <TabPane tab={t('searchByCode')} key="3">
        <SearchByCodeForm onSubmit={onSearch} codes={codes} />
      </TabPane>
    </Tabs>
  );
}

SearchPane.propTypes = {
  t: PropTypes.func,
  onSearch: PropTypes.func,
  codes: PropTypes.arrayOf(PropTypes.string),
};

export default withNamespaces()(SearchPane);
