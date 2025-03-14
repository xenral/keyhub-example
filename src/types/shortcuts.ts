import { ShortcutSettings, ShortcutScope, ShortcutStatus, ShortcutType } from "react-keyhub";

// Define custom shortcuts type extending the default ones
export const myShortcuts: ShortcutSettings = {
  customAction: {
    keyCombo: "ctrl+k",
    name: "Custom Action",
    description: "Perform a custom action",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
  toggleTheme: {
    keyCombo: "ctrl+t",
    name: "Toggle Theme",
    description: "Toggle between light and dark theme",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
  increaseCounter: {
    keyCombo: "shift+up",
    name: "Increase Counter",
    description: "Increase the counter value",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
  decreaseCounter: {
    keyCombo: "ctrl+down",
    name: "Decrease Counter",
    description: "Decrease the counter value",
    scope: "global" as ShortcutScope,
    priority: 100,
    status: ShortcutStatus.ENABLED,
    group: "Custom",
    type: ShortcutType.REGULAR,
  },
};

export type Theme = "light" | "dark" | "auto";
export type Layout = "modal" | "sidebar" | "inline"; 