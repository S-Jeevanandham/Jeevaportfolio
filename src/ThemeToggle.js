import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      <button className="button button--flex" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
