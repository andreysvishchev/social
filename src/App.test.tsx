import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

let dialogsData = [
  {id: 1, name: 'Anton'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Lena'},
  {id: 4, name: 'Stas'}
]

let messageData = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'Hello'},
  {id: 3, text: 'Hello'},
  {id: 4, text: 'Hello'},
]


test('renders learn react link', () => {
  render(<App messageData={messageData} dialogsData={dialogsData}  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
