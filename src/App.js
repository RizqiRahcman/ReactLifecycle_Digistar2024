import "./App.css";
import Component from "./components/Component.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

export default App;
