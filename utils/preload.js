import { PORTFOLIO_ITEMS } from "@/constants/content/portfolio"
import { PRELOAD_IMAGES } from "@/constants/content/images";
export const preloadImages = () => {
    const paths = Object.keys(PORTFOLIO_ITEMS).map((item) => {
        const {card} = PORTFOLIO_ITEMS[item] ?? {};
        const {picture} = card ?? {};
        return `/${picture}`
    })

    const allPaths = [...paths, ...PRELOAD_IMAGES]

    allPaths.forEach((path) => {
        const img = new Image();
        img.src = path;
      });
}