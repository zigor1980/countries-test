import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';

const { Item } = Form;

function SearchByNameForm({
  onSubmit,
  isLoading,
  t,
}) {
  const [form] = Form.useForm();
  const onFinish = useCallback(({ name, fullText = false }) => {
    onSubmit('name', name, fullText);
  }, [onSubmit]);

  return (
    <Form form={form} onFinish={onFinish} className="search-form">
      <div className="search-form__controls">
        <Item
          name="name"
        >
          <Input />
        </Item>
      </div>
      <div className="search-form__controls_checkbox">
        <Item
          name="fullText"
          valuePropName="checked"
        >
          <Checkbox>
            {t('fullText')}
          </Checkbox>
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

SearchByNameForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  t: PropTypes.func,
};


export default withNamespaces()(SearchByNameForm);
