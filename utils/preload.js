import { PORTFOLIO_ITEMS } from "@/constants/content/portfolio"
export const preloadImages = () => {
    const paths = Object.keys(PORTFOLIO_ITEMS).map((item) => {
        const {card} = PORTFOLIO_ITEMS[item] ?? {};
        const {picture} = card ?? {};
        return `/${picture}`
    })

    paths.forEach((path) => {
        const img = new Image();
        img.src = path;
      });
}