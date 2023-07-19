import { render } from '@testing-library/react';
import Calculator from '../calculator';

test('should render the calculator section correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
