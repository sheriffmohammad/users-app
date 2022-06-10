import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';
import { TranslateProvider } from './translation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act } from 'react-dom/test-utils';


test('sidebar toggles on click', () => {
  const queryClient = new QueryClient();

  // Render the app with the required providers

  render(<TranslateProvider>
    <QueryClientProvider client={queryClient}>
      <App></App>
    </QueryClientProvider>
  </TranslateProvider>);

  // Search for the language switching button

  const languageElement = screen.getByText(/Arabic/i);

  // And then press on it

  act(() => {
    languageElement.click();
  })

  // Search for an arabic word in the home page

  const PageElement = screen.getByText(/الصفحة/i);

  // Expect the arabic word to be in the document

  expect(PageElement).toBeInTheDocument();
});
