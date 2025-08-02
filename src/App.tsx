import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar';
import useTheme from '@hooks/useTheme';
import { ThemeProvider } from '@context/ThemeContext';
import HomePage from '@pages/HomePage'; // Replace with your actual homepage component

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes below if needed */}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
