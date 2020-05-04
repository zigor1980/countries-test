import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import {
  Form,
  Select,
  Button,
} from 'antd';

const { Option } = Select;
const { Item } = Form;

function SearchByCodeForm({
  codes = [],
  onSubmit,
  isLoading,
  t,
}) {
  const [form] = Form.useForm();
  const onFinish = useCallback(({ code }) => {
    onSubmit('code', code);
  }, [onSubmit]);

  return (
    <Form form={form} onFinish={onFinish} className="search-form">
      <div className="search-form__controls">
        <Item
          name="code"
        >
          <Select showSearch filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
            {codes.map((code) => <Option key={code}>{code}</Option>)}
          </Select>
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

SearchByCodeForm.propTypes = {
  t: PropTypes.func,
  codes: PropTypes.arrayOf(PropTypes.string),
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};


export default withNamespaces()(SearchByCodeForm);
