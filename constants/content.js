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
            /**
             * This is the title on the actual expanded content, or popup. 
             */
            title: 'Pebble',
            /**
             * Popup picture
             */
            picture: 'pebble_example.png',
            /**
             * Accessibility alt text for photo in case photo doesn't load
             */
            alt: 'Pebble app example',
            /**
             * This determines the vertical and horizontal position of the picture. First number is horizontal, second is vertical. 
             * By default it is centered but if we were to change this to 50% 0% for example then it would be centered horizontally but vertically the top of the image would align with the top of the container.
             */
            position: '50% 50%',
            /**
             * This is the main description of the project that is directly beneath the title.
             */
            description: `Pebble is an app designed for Curling teams to track their progress and games. It also infused a social media element where users can add each other to teams and earn badges for achieving certain accomplishments (some good, some bad). I was the sole UI/UX Designer on the project, I worked along a team of technical professionals to make the vision happen. In the early stages of research and ideation, I realized that I needed to take a broader approach to ,my role in the team and focus on things like Design Systems and Information Architecture instead of getting into the nitty-gritty details. Once we moved onto the testable phase of the app, I was also tasked with some of the graphic design elements such as the logo design and the brand pattern. `,
            paragraphs: [
                {
                    title: 'Design System',
                    content: `As a creative, I believe in allowing myself an adequate amount of time to solve a problem. This helps me find the best possible solution instead of the quickest one. Collaboration is important to me when working with a group so I decided that a broad approach, such as creating a design system, was necessary. For the design system, I tried to balance a sense of fun with utility. The users are people who play casually but do things like create tournaments and develop teams.`
                },
                {
                    title: 'Information Architecture',
                    content: `Scope Creep was a real issue with this project. It has such potential to be larger than an app made to just keep score and stats for a team. When approaching the IA, we kept on coming up with ideas for social networking, tournament organization, badges, etc that would be great to implement in the future but we realized that it needed to stick to it’s roots first. The IA was made so users can create a profile, join a team, add themselves to a rink, and play a game. Simple and useful with a lot of space for growth.`
                },
                {
                    title: 'Graphic Design',
                    content: `After the Design System was done, Pebble needed branding. I was tasked with creating a logo and brand identity. In its initial stages, I played with the idea of the logo being a triangle mosaic of a curling target. It would make it easy to use triangles in all sorts of visual components. It was decided that the style did not fit the rest of the theme and I went simpler. The final version of the logo is a very friendly, simple graphic depicting the name ‘pebble’ with the ‘E’ as a curling rock. Much like the story of pebble, the logo is simple, friendly, and fun`
                }
            ]
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
            position: '50% 50%',
            description: `The Community Counselling Centre is a Non-Profit Organization that offers ‘low-barrier’ counselling services to anyone who needs it. They are a partner of the University of British Columbia’s Counselling Master’s Program; offering hands on experience to students finishing their practicum.  I approached the CCC with an offer to perform a full-scale re-design of their website including UX Research, UI Development, Content Design, and Website Development.
            After customer research, I realized that my task for the CCC was based around the question, ‘How might we adjust the CCC’s online presence to make first point of contact simple for clients?’ Thus, I redesigned site’s IA, User Interface and Content to reduce barriers for clients`,
            paragraphs: [
                {
                    title: 'Information Architecture (IA)',
                    content: `How the information on the website is presented is ket to lowering barriers for clients trying to access help. After doing user research, I realized that there are two types of people using counselling sites. One knows that they want help for sure, and the other is still deciding on whether they need help or not. Thus, I added a primary and secondary button that made it easy to navigate to the part of the website each type of user is trying access instantly.`
                },
                {
                    title: 'User Interface Design',
                    content: `he CCC already has a design strategy that they preferred to use. Given that, my work on the UI had a lot more to do with making it calming, competent, and easy to user/look at. I made the main elements look like leaves of a lotus flower (the CCC’s symbol), I used calming gradients, and i based all of the visuals around hands reaching out for help. Our hands are such powerful indicators of our emotions. They are a powerful way of showing emotion and strength`
                },
                {
                    title: 'Content Design',
                    content: `Like most counselling centres, the CCC has a long waiting list. One of the largest barriers to finding mental health help is dealing with the pure volume of other clients who also need help. I came up with the idea to create a page specifically designed for people on the waitlist who need access to help immediately. This page includes videos with basic counselling strategies, links to other forms of help, written directions for emergency situations and access to the contact page for urgent matters.`
                }
            ]
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
            position: '50% 50%',
            description: `Darkhorse Emergency is an offshoot of the Edmonton, AB based company Darkhorse Analytics. Darkhorse Emergency provides analytics to many Canadian first response units such as Fire Services and Ambulances. My UX Team and I were tasked with a total design overhaul of their Deployment tool which is mainly used for planning and lobbying for funds to stakeholders. I was tasked with redesigning the dashboard.`,
            paragraphs: [
                {
                    title: 'Research',
                content: `How the information on the website is presented is ket to lowering barriers for clients trying to access help. After doing user research, I realized that there are two types of people using counselling sites. One knows that they want help for sure, and the other is still deciding on whether they need help or not. Thus, I added a primary and secondary button that made it easy to navigate to the part of the website each type of user is trying access instantly.`
            },
            {
                title: 'User Interface Design',
                content: `The CCC already has a design strategy that they preferred to use. Given that, my work on the UI had a lot more to do with making it calming, competent, and easy to user/look at. I made the main elements look like leaves of a lotus flower (the CCC’s symbol), I used calming gradients, and i based all of the visuals around hands reaching out for help. Our hands are such powerful indicators of our emotions. They are a powerful way of showing emotion and strength`
            },
            {
                title: 'Prototyping',
                content: `Like most counselling centres, the CCC has a long waiting list. One of the largest barriers to finding mental health help is dealing with the pure volume of other clients who also need help. I came up with the idea to create a page specifically designed for people on the waitlist who need access to help immediately. This page includes videos with basic counselling strategies, links to other forms of help, written directions for emergency situations and access to the contact page for urgent matters.`
            }
            ]
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
            position: '50% 50%',
            description: `Above are a collection of recent graphics and logos that I have created for various projects. In an effort to expand my skillset, I offer graphic design services to companies and individual entrepreneurs. I am passionate about small business and I like to make an effort to be involved when I can. Each of these are small businesses that I have created full redesigns of their brands. `,
            paragraphs: [
                {
                    title: 'Pebble Logo (Left)',
                    content: `Pebble has its own section of my portfolio but I felt it was important to highlight the logo. Pebble is a curling app that needs to be usable and friendly. We were aiming for it to be fun and useful. The logo represents the lowercase ‘e’ in ‘pebble’ as well as a curling rock. I made sure that the colours were energetic and fun. The shapes are rounded and friendly. It is easy to add it into the full name of the brand as well as it can stand on it’s own as a brand mark. This makes it versatile and easy to use.`
                },
                {
                    title: 'The Chevys Re-Brand (Middle)',
                    content: `The Chevys are a Rockabilly band from Northern BC. I have a soft spot for the entertainment industry as I have a background in bands and songwriting myself. This job was a no-brainer for me. The Chevys’ main demographic is older males who live in Northern BC. They tend to be into cars, live music and beer. I designed the`
                },
                {
                    title: 'Vanessa Francia Logo (Right)',
                    content: `Like most counselling centres, the CCC has a long waiting list. One of the largest barriers to finding mental health help is dealing with the pure volume of other clients who also need help. I came up with the idea to create a page specifically designed for people on the waitlist who need access to help immediately. This page includes videos with basic counselling strategies, links to other forms of help, written directions for emergency situations and access to the contact page for urgent matters.`
                }
            ]
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