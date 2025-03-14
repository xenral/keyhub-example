import "./App.css";
import { KeyHubProvider, ShortcutSheetStyles } from "react-keyhub";
import { ShortcutDemo } from "./components/ShortcutDemo";
import { myShortcuts } from "./types/shortcuts";

function App() {
  return (
    <KeyHubProvider shortcuts={myShortcuts}>
      <style>{ShortcutSheetStyles}</style>
      <ShortcutDemo />
    </KeyHubProvider>
  );
}

export default App;
