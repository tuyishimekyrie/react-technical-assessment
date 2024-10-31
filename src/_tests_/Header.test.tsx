import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';
import useThemeStore, { ThemeState } from '../store/themeStore';

// Mock the theme store
jest.mock('../store/themeStore');

describe('Header Component', () => {
  const toggleThemeMock = jest.fn();

  beforeEach(() => {
    // Define the mock return value
    (useThemeStore as unknown as jest.Mock).mockReturnValue({
      isDarkMode: false, // Initial state is light mode
      toggleTheme: toggleThemeMock,
    } as ThemeState); // Cast the return value to ThemeState
  });

  it('renders a paragraph with "Search" text', () => {
    render(<Header />);

    const searchParagraph = screen.getByText('Search');
    expect(searchParagraph).toBeInTheDocument();
    expect(searchParagraph.tagName).toBe('P');
  });

  it('renders the night mode icon when in light mode', () => {
    render(<Header />);

    const nightIcon = screen.getByTestId('night-icon'); // Give your icon a test ID
    expect(nightIcon).toBeInTheDocument();
  });

  it('toggles to day mode icon when clicked', () => {
    // Set up dark mode state
    (useThemeStore as unknown as jest.Mock).mockReturnValueOnce({
      isDarkMode: true,
      toggleTheme: toggleThemeMock,
    } as ThemeState); // Cast the return value to ThemeState

    render(<Header />);

    const sunIcon = screen.getByTestId('day-icon'); // Give your icon a test ID
    expect(sunIcon).toBeInTheDocument();

    fireEvent.click(sunIcon); // Simulate clicking the icon
    expect(toggleThemeMock).toHaveBeenCalled(); // Ensure the toggleTheme function was called
  });
});
