export const useNavigation = () => {
    const route = useRoute()
  const clickLogo = () => {
    if (route.path === '/') {
        return navigateTo('/portfolio')
      }
      return navigateTo('/')
  }

  return {
    clickLogo
  };
};
