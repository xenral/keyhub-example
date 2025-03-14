import { ShortcutSettings, ShortcutScope, ShortcutStatus, ShortcutType, defaultShortcuts } from "react-keyhub";

// Define custom shortcuts type extending the default ones
export const myShortcuts: ShortcutSettings = {
  ...defaultShortcuts,
  customAction: {
    keyCombo: "shift+a",
    name: "Custom Action",
    description: "Perform a custom action",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
  toggleTheme: {
    keyCombo: "shift+t",
    name: "Toggle Theme",
    description: "Toggle between light and dark theme",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
  increaseCounter: {
    keyCombo: "alt+up",
    name: "Increase Counter",
    description: "Increase the counter value",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
  decreaseCounter: {
    keyCombo: "alt+down",
    name: "Decrease Counter",
    description: "Decrease the counter value",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
  showShortcutSheet: {
    keyCombo: "shift+k",
    name: "Show Shortcut Sheet",
    description: "Show the shortcut sheet",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
};

export type Theme = "light" | "dark" | "auto";
export type Layout = "modal" | "sidebar" ; 