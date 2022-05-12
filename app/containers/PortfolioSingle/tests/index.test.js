import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import PortfolioSingle from '../index';

describe('<PortfolioSingle />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="ru">
        <PortfolioSingle />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
