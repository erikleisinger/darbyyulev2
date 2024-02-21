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
        icon: "ic:baseline-home",
        /**
         * WARNING do not update or may break website
         * Route that this button navigates to 
         */
        path: "/",
      },
      {
        name: "About",
        icon: "ion:md-body",
        path: "/philosophy",
      },
      {
        name: "Work",
        icon: "material-symbols:apk-document",
        path: "/portfolio",
      },  
      {
        name: "Contact",
        icon: "material-symbols:mail-rounded",
        path: "/contact",
        }
];