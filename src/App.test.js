import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";

test('renders portfolio heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const heading = screen.getByText(/Danish Javed/i);
  expect(heading).toBeInTheDocument();
});
