import "./App.css";
import { KeyHubProvider, ShortcutSheetStyles } from "react-keyhub";
import { ShortcutDemo } from "./components/ShortcutDemo";
import { myShortcuts } from "./types/shortcuts";

function App() {
  return (
    <KeyHubProvider shortcuts={myShortcuts}>
      {/* Add the styles to the document */}
      <style>{ShortcutSheetStyles}</style>
      <ShortcutDemo />
    </KeyHubProvider>
  );
}

export default App;
