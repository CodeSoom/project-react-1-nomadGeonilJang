import React from 'react';
import { render } from '@testing-library/react';

import PageContainer from './PageContainer';
import PageTitle from './PageTitle';

test('render PageContainer with title', () => {
  const title = 'Page Title';
  const { container } = render(
    <PageContainer>
      <PageTitle title={title} />
    </PageContainer>
  );

  expect(container).toHaveTextContent(title);
});
