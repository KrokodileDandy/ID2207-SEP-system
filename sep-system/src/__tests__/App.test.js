import { render, screen } from '@testing-library/react';
import App from '../App';
import Login from '../pages/Login'

test('renders the landing page', () => {
  render(<Login />);

  expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Login");
});