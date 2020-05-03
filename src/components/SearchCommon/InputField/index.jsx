import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const InputField = React.forwardRef(({
  onChange, className, style = {}, onPressEnter,
}, ref) => {
  const onKeyDown = useCallback((e) => {
    if (e.keyCode === 13) {
      if (onPressEnter) {
        onPressEnter(e);
      }
    }
  }, [onPressEnter]);

  return (
    <input ref={ref} type="text" onKeyDown={onKeyDown} style={style} onChange={onChange} className={classnames('input-field', className)} />
  );
});

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  onPressEnter: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.object),
};

export default (InputField);
