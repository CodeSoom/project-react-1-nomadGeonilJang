import React from 'react';
import { render } from '@testing-library/react';

import PageTitle from './PageTitle';

test('render PageTitle with title', () => {
  const title = 'Page Title';
  const { container } = render(<PageTitle title={title} />);

  expect(container).toHaveTextContent(title);
});
