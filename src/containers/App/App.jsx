import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/SearchCommon/InputField';
import { Desktop } from 'components/Responsible';
import DesktopLayout from 'components/DesktopLayout';

function App({ getAvailableCodes }) {
  useEffect(() => {
    getAvailableCodes();
  });

  return (
    <>
      <Desktop>
        <DesktopLayout>
          <div>
            <InputField />
          </div>
        </DesktopLayout>
      </Desktop>
    </>
  );
}

App.propTypes = {
  getAvailableCodes: PropTypes.func.isRequired,
};


export default App;
