export const NAV_ITEMS = [
    {
        /**
         * "name" is what displays under the nav icon
         */
        name: "Home",
        /**
         * Icon corresponding to one of the many icons found at: 
         * https://icones.js.org/
         */
        icon: "carbon:home",
        /**
         * WARNING do not update or may break website
         * Route that this button navigates to 
         */
        path: "/",
      },
      {
        name: "About",
        icon: "carbon:user",
        path: "/philosophy",
      },
      {
        name: "Work",
        icon: "carbon:workspace",
        path: "/portfolio",
      },  
      {
        name: "Contact",
        icon: "carbon:email",
        path: "/contact",
        }
];