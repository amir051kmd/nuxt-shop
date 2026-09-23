export const useTheme = () => {

  const darkMode = useState('darkMode', () => false)

  const loadTheme = () => {

    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      darkMode.value = true
    } else {
      darkMode.value = false
    }

  }

  const toggleTheme = () => {

    darkMode.value = !darkMode.value

    localStorage.setItem(
      'theme',
      darkMode.value ? 'dark' : 'light'
    )

  }

  return {
    darkMode,
    toggleTheme,
    loadTheme
  }

}