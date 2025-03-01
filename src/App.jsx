import reactLogo from './assets/react.svg'

//Method 1: Use next-themes
import useDarkMode from './hooks/useDarkMode';

//Method 2: Use ThemeProvider.tsx
import { useTheme } from "./ThemeProvider";
function App() {
  return (
    <Demo1 />
    // <Demo2 />
  )
}

export default App

// 使用 next-themes 实现主题切换
function Demo1() {
  const { toggleDarkMode, ref: themeRef } = useDarkMode();

  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center bg-theme-bg '>
      <h1 className={`text-2xl text-theme-text`}>Vite + React</h1>
      <a href="#" ref={themeRef} onClick={toggleDarkMode}>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </main>
  )
}
// 使用 ThemeProvider.tsx 实现主题切换
function Demo2() {
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