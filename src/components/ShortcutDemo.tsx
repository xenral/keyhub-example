import { ShortcutSheet } from "react-keyhub";
import { Theme, Layout } from "../types/shortcuts";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useShortcutManager } from "../hooks/useShortcutManager";
import { FaGithub, FaStar } from "react-icons/fa";

// Main component that demonstrates the shortcuts
export function ShortcutDemo() {
  const {
    count,
    theme,
    layout,
    isShortcutSheetOpen,
    incrementCount,
    decrementCount,
    toggleShortcutSheet,
    closeShortcutSheet,
    changeTheme,
    changeLayout,
  } = useShortcutManager();

  return (
    <div className={`demo-container ${theme === "dark" ? "dark-theme" : ""}`}>
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      </div>
   
      <h1>React KeyHub Demo</h1>

      <div className="card">
        <div className="github-container">
          <a href="https://github.com/xenral/react-keyhub" target="_blank" rel="noreferrer" className="github-link">
            <FaGithub className="github-icon" />
            <span>React KeyHub</span>
          </a>
          <a href="https://github.com/xenral/react-keyhub/stargazers" target="_blank" rel="noreferrer" className="github-star-link">
            <FaStar className="star-icon" />
            <span>Star us on GitHub</span>
          </a>
        </div>
        
        <h2>Counter: {count}</h2>
        <div className="button-group">
          <button onClick={incrementCount}>
            Increment (Alt+↑)
          </button>
          <button onClick={decrementCount}>
            Decrement (Alt+↓)
          </button>
        </div>

        <div className="shortcut-info">
          <p>Available shortcuts:</p>
          <ul>
            <li>
              <kbd>Shift</kbd> + <kbd>A</kbd>: Trigger custom action
            </li>
            <li>
              <kbd>Shift</kbd> + <kbd>T</kbd>: Toggle theme
            </li>
            <li>
              <kbd>Alt</kbd> + <kbd>↑</kbd>: Increase counter
            </li>
            <li>
              <kbd>Alt</kbd> + <kbd>↓</kbd>: Decrease counter
            </li>
            <li>
              <kbd>Shift</kbd> + <kbd>K</kbd>: Show shortcut sheet
            </li>
          </ul>
        </div>

        <div className="settings">
          <div className="setting-group">
            <label>Theme:</label>
            <select
              value={theme}
              onChange={(e) => changeTheme(e.target.value as Theme)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div className="setting-group">
            <label>Layout:</label>
            <select
              value={layout}
              onChange={(e) => changeLayout(e.target.value as Layout)}
            >
              <option value="modal">Modal</option>
              <option value="sidebar">Sidebar</option>
            </select>
          </div>

          <button
            className="show-shortcuts-btn"
            onClick={toggleShortcutSheet}
          >
            Show Shortcut Sheet
          </button>
        </div>
      </div>

      {/* Render the shortcut sheet */}
      <ShortcutSheet
        isOpen={isShortcutSheetOpen}
        onClose={closeShortcutSheet}
        theme={theme}
        layout={layout}
      />
    </div>
  );
} 