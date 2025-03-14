import { useState } from 'react';
import { useShortcut } from 'react-keyhub';
import { Theme, Layout } from '../types/shortcuts';

interface ShortcutManagerProps {
  initialCount?: number;
  initialTheme?: Theme;
  initialLayout?: Layout;
}

export function useShortcutManager({
  initialCount = 0,
  initialTheme = 'light',
  initialLayout = 'modal',
}: ShortcutManagerProps = {}) {
  const [count, setCount] = useState(initialCount);
  const [isShortcutSheetOpen, setIsShortcutSheetOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [layout, setLayout] = useState<Layout>(initialLayout);

  // Register shortcut handlers
  useShortcut('toggleTheme', () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  });

  useShortcut('increaseCounter', () => {
    setCount((prev) => prev + 1);
  });

  useShortcut('decreaseCounter', () => {
    setCount((prev) => Math.max(0, prev - 1));
  });

  useShortcut('customAction', () => {
    alert('Custom action triggered!');
  });

  useShortcut('showShortcutSheet', () => {
    setIsShortcutSheetOpen(true);
  });

  const incrementCount = () => setCount((prev) => prev + 1);
  const decrementCount = () => setCount((prev) => Math.max(0, prev - 1));
  const toggleShortcutSheet = () => setIsShortcutSheetOpen((prev) => !prev);
  const closeShortcutSheet = () => setIsShortcutSheetOpen(false);
  const changeTheme = (newTheme: Theme) => setTheme(newTheme);
  const changeLayout = (newLayout: Layout) => setLayout(newLayout);

  return {
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
  };
} 