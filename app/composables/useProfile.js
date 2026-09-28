export const useProfile = async () => {
  const { data: products } = await useFetch('/api/products')

  return {
    products
  }
}