export const useProfile = async () => {
  const { data: profile } = await useFetch('/api/profile')

  return {
    profile
  }
}