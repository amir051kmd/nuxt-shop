export const useTheme = () => {
  const theme = useCookie("theme", {
    default: () => "light",
  })

  const darkMode = computed(() => {
    return theme.value === "dark"
  })

  function toggleTheme() {
    if (theme.value === "dark") {
      theme.value = "light"
    } else {
      theme.value = "dark"
    }
  }

  return {
    darkMode,
    toggleTheme,
  }
}