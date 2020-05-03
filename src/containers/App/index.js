import { connect } from 'react-redux';
import { getAvailableCodes } from 'redux/codes/actions';
import Component from './App';

export default connect(null, {
  getAvailableCodes,
})(Component);
