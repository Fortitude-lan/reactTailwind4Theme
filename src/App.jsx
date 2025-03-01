import reactLogo from './assets/react.svg'
import { useTheme } from "./ThemeProvider";
function App() {
  const { theme, setTheme } = useTheme();
  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center bg-theme-bg '>
      <h1 className={`text-2xl text-theme-text`}>Vite + React</h1>
      <a href="#" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </main>
  )
}

export default App
