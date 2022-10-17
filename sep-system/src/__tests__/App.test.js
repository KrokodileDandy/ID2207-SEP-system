import { render, screen } from '@testing-library/react';
import App from '../App';
import Login from '../pages/Login'

test('sums numbers', () => {
  expect(1+2).toEqual(3);
});

// test('renders the landing page', () => {
//   render(<Login />);

//   expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Login");
// });