import { BRAND_COLORS } from "@/constants/color";

export const useColor = () => {
  function getColor(color: string) {
    return BRAND_COLORS[color];
  }

  const route = useRoute();

  const COLOR_ROUTES = ["/philosophy", "/contact"];

  const light = computed(() => {
    return COLOR_ROUTES.includes(route.path);
  });

  return {
    getColor,
    light,
  };
};
