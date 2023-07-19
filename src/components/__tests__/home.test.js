import { render } from '@testing-library/react';
import Home from '../home';

test('should render the home section correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
