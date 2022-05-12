/*
 * PortfolioSingle
 *
 */

import React from 'react';
// import { useParams } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import Container from 'components/Container';
import messages from './messages';

export default function PortfolioSingle() {
  // The <Route> that rendered this component has a
  // path of `/topics/:slug`. The `:slug` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  // const { slug } = useParams();
  return (
    <div>
      <Container>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <p>УралПолиКом - компания, делает наливные полы с 2004 года.</p>
        <p>
          Cтроительная компания с собственным производством. УралПолиКом
          занимается монтажом и продажей наливных полимерных полов.
        </p>
      </Container>
    </div>
  );
}
