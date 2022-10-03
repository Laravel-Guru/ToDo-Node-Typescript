import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

// to avoid FOUC (Flash of unstyled content)
export default function useDarkMode() {
  const [theme, setCurrentTheme] = useState<Theme>()

  const handleThemeChange = () => {
    if ('theme' in localStorage) {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
      }
      if (localStorage.theme === 'light') {
        document.documentElement.classList.remove('dark')
      }
      setCurrentTheme(localStorage.theme)
      return
    }

    const userDeviceInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    // if theme is not in localStorage
    if (userDeviceInDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setCurrentTheme('dark')
    } else {
      localStorage.theme = 'light'
      setCurrentTheme('light')
    }
  }

  const setTheme = (theme: 'toggle' | Theme) => {
    if (theme === 'toggle') {
      const themeMap = {
        light: 'dark',
        dark: 'light',
      }
      // @ts-ignore
      localStorage.theme = themeMap[localStorage.theme ?? 'light']
    } else {
      localStorage.theme = theme
    }
    handleThemeChange()
  }

  useEffect(() => {
    handleThemeChange()
  }, [])

  return { theme: theme!, setTheme }
}