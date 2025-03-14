# React KeyHub Demo

This is an official demonstration project for the [react-keyhub](https://github.com/alimorshedzadeh/react-keyhub) package, a lightweight, scalable keyboard shortcut manager for React applications with TypeScript support.

## Features Showcased

This demo showcases the following features of the react-keyhub package:

- **Keyboard Shortcuts**: Various keyboard shortcuts for different actions
- **Shortcut Sheet**: A modal that displays all available shortcuts
- **Theming Support**: Light, dark, and auto themes for the shortcut sheet
- **Layout Options**: Different layouts for the shortcut sheet (modal, sidebar)

## Available Shortcuts

The demo includes the following custom shortcuts:

- `Ctrl + K`: Trigger a custom action
- `Ctrl + T`: Toggle between light and dark theme
- `Shift + ↑`: Increase the counter
- `Ctrl + ↓`: Decrease the counter
- `Ctrl + /`: Show the shortcut sheet

Additionally, all the default shortcuts from react-keyhub are available, including:

### File Operations
- `Ctrl + S`: Save
- `Ctrl + Shift + S`: Save As
- `Ctrl + P`: Print
- `Ctrl + Shift + N`: New Window

### Edit Operations
- `Ctrl + F`: Find
- `Ctrl + H`: Replace
- `Ctrl + Z`: Undo
- `Ctrl + Y`: Redo
- `Ctrl + X`: Cut
- `Ctrl + C`: Copy
- `Ctrl + V`: Paste
- `Ctrl + A`: Select All

### Navigation
- `Ctrl + G`: Go to Line
- `Ctrl + P`: Go to File (lower priority than print)

### Help
- `F1`: Help
- `Ctrl + /`: Show Shortcuts

### Git (Sequence Shortcuts)
- `g c`: Git Commands (press "g" then "c")
- `g s`: Git Status (press "g" then "s")

## Project Structure

The project is organized as follows:

```
src/
├── components/       # React components
├── types/            # TypeScript type definitions
├── assets/           # Static assets
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in the terminal

## How to Use

1. Use the keyboard shortcuts listed above to interact with the demo
2. Click the "Show Shortcut Sheet" button to open the shortcut sheet
3. Use the theme selector to switch between light, dark, and auto themes
4. Use the layout selector to switch between modal, sidebar layouts

## Deployment

This project is configured for easy deployment to GitHub Pages. To deploy:

1. Update the `vite.config.ts` file with your repository name
2. Run the build command:
   ```bash
   npm run build
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Learn More

For more information about the react-keyhub package, check out the [official repository](https://github.com/alimorshedzadeh/react-keyhub).

## License

MIT
