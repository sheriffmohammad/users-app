import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';
import { TranslateProvider } from './translate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act } from 'react-dom/test-utils';


test('sidebar toggles on click', () => {
  const queryClient = new QueryClient();
  render(<TranslateProvider>
    <QueryClientProvider client={queryClient}>
      <App></App>
    </QueryClientProvider>
  </TranslateProvider>);
  const languageElement = screen.getByText(/Arabic/i);
  act(() => {
    languageElement.click();
  })
  const PageElement = screen.getByText(/صفحة/i);
  expect(PageElement).toBeInTheDocument();
});
