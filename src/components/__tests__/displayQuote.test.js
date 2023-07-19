import { render } from '@testing-library/react';
import Quote from '../displayQuote';

test('should render the Quote component correctly', () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});
