// Philosophy page

export const PARAGRAPHS = [
    {
        title: '',
        content: `At the core of my design philosophy is a commitment to creative harmony: harmony among aesthetics and usability, harmony between creative decisions and data, and harmony between data and humanity. I achieve this through three key principles:`
    },
    {
        title: 'User-Centered Design:',
        content: `I prioritize creating interfaces through meticulous design strategy. These interfaces not only fulfill functional requirements but also emotionally engage and delight users. The ultimate goal is to produce something both beautiful and usable.`
    },
    {
        title: 'Crafting Digital Harmony:',
        content: `In our technocratic world saturated with data, I recognize the importance of listening to data while preserving a human touch. Through data analysis and testing, I aim to marry the project's concept with user needs. This process ensures each project seamlessly blends aesthetics, functionality, and longevity.`
    },
    {
        title: 'The Importance of Long-Lasting Results:',
        content: `Distinguishing between a good solution and the best possible solution, I make it my mission to propel every project from merely good to the very best it can be.`
    }
]


export const PORTFOLIO_ITEMS = {
     /** 
         * Each item must have a unique name. The name of this item is 'pebble'
         */
    pebble:{
       
      
        /**
         * The card is displayed on the main 'Work' page. It's the card you click on to view a portfolio piece.
         */
        card: {
            /**
             * Title is the bold text at the top of the card.
             */
            title: 'Pebble',
            /**
             * Content is the description of the piece, directly beneath the title.
             */
            content: `Pebble is a curling app made for tracking stats and games on a mobile device. My duties included Design Strategy, Information Architecture, Research, and Logo Design.`,
            /**
             * This corresponds to a file in the /public folder. It is displayed on the left hand side of the card.
             */
            picture: 'pebble_example.png',
            /**
             * For accessibility, the text that is displayed/read if a) the image fails to load, or b) the user is vision impaired and requires a description of the image
             */
            alt: 'Pebble app example',
        },
        expanded: {
            title: 'Pebble',
            picture: 'pebble_example.png',
            alt: 'Pebble app example',
            position: '50% 50%'
        },
       
    },
    counselling: {
     
        card: {
            title: 'Counselling Centre',
            content: `Website redesign for the Community Counselling Centre in Prince George, BC. Included Information Architecture, UX Writing, User Interface Design, Content Design, Icon Design.`,
            picture: 'ccc_example.png',
            alt: 'Counselling Centre example'
        },
        expanded: {
            title: 'Counselling Centre',
            picture: 'ccc_example.png',
            alt: 'Counselling Centre example',
            position: '50% 50%'
        }
       
    },
    darkhorse: {
      
        card: {
            title: 'Darkhorse Emergency',
            content: `Darkhorse Emergency is an analytics app made for Emergency Services to plan and coordinate resources. I was responsible for the homepage redesign.`,
            picture: 'darkhorse_example.png',
            alt: 'Darkhorse app example'
        },
        expanded: {
            title: 'Darkhorse Emergency',
            picture: 'darkhorse_example.png',
            alt: 'Darkhorse app example',
            position: '50% 50%'
        }
      
    },
    graphics: {
      
        card: {
            title: 'Graphics',
            content: `A collection of graphics I have created for various projects. This collection includes logos, icons, posters, and website graphics.`,
            picture: 'graphics_example.png',
            alt: 'Graphics example'
        },
        expanded: {
            title: 'Graphics',
            picture: 'graphics_example.png',
            alt: 'Graphics example',
            position: '50% 50%'
        }
        
    },
    ux_writing: {
       
        card: {
            title: 'UX Writing',
            content: `A collection of UX Writing I have created for various projects. This collection includes blogs, pop ups, website content, content design.`,
            picture: '',
            alt: 'UX Writing example'
        },
        expanded: {
            title: 'UX Writing',
            picture: '',
            alt: 'UX Writing example',
            position: '50% 50%'
        }
        
    }
}