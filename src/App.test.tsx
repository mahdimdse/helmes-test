import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {SearchBar} from './components/searchBar/SearchBar';

test('renders learn react link', () => {
  render(<SearchBar lastSearchStr={''} lastSearches={[]} />);
  const linkElement = screen.getByText(/Find/i);
  expect(linkElement).toBeInTheDocument();
});
