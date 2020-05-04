import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import {
  Form,
  Input,
  Button,
} from 'antd';

const { Item } = Form;

function SearchByCurrencyForm({
  onSubmit,
  t,
  isLoading,
}) {
  const [form] = Form.useForm();
  const onFinish = useCallback(({ currency }) => {
    onSubmit('currency', currency);
  }, [onSubmit]);

  return (
    <Form form={form} onFinish={onFinish} className="search-form">
      <div className="search-form__controls">
        <Item
          name="currency"
        >
          <Input />
        </Item>
      </div>
      <div className="search-form__submit">
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {t('search')}
        </Button>
      </div>
    </Form>
  );
}

SearchByCurrencyForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  t: PropTypes.func,
};


export default withNamespaces()(SearchByCurrencyForm);
