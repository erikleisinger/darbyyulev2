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
            * DESKTOP ONLY
            * This determines the vertical and horizontal position of the picture. First number is horizontal, second is vertical. 
            * By default it is centered but if we were to change this to 50% 0% for example then it would be centered horizontally but vertically the top of the image would align with the top of the container.
            */
           position: '50% 30%',
           /**
            * MOBILE ONLY
            * position of picture in % left from left side of the screen
            */
           pictureLeft: '50%',
           /**
            * MOBILE ONLY
            * position picture in % top from top of screen
            */
           pictureTop: '65%',
           /**
            * MOBILE ONLY
            * controls zoom of picture
            * 100% is normal, larger is zoomed in
            */
           pictureWidth: '170%',
           /**
            * This is the main description of the project that is directly beneath the title.
            */
           description: `Pebble is a Web-App designed for Curling teams to track their progress and games. I was the sole UI/UX Designer on the project, I worked along a team of technical professionals to make the vision happen. In the early stages of research and ideation, I realized that most curlers do their own stats and tracking on spreadsheets. It is difficult for more than one team member to access statistics or go over games because the team lead is normally the only one with access. On top of that, curling is a very friendly, social port and most curlers do not like using traditional sporting apps because they feel too intense and exclusive. They need an app that is inclusive to casual players and easy to track games or stats. I set out to answer the question, ‘How might we make it easy for a user to navigate, understand, and interact with the app in a meaningful way?’`,
           /**
            * The three paragraphs at the bottom of the expanded content. Each array item is a paragraph.
            */
           paragraphs: [
               {
                   title: 'LoFi Wireframing and Information Architecture',
                   content: `Pebble is in it’s initial stages of development. Scope creep was a real issue in the beginning since this idea has such potential. We decided to stick to four (4) main screens for the first iteration: a game page, a team page, a personal page, and a rink page. We made it easy for user to create teams and add themselves to rinks. From there, they can challenge other teams to games. The game results automatically update the team’s stats as well as the player’s and club’s.`
               },
               {
                   title: 'HiFi Wireframing and Deign System',
                   content: `One of the largest issues we found in research was that most curlers find traditional sporting apps uninviting. This is a stats based app but it’s also made for rec league players. I decided that a friendly but minimalist design would be a perfect marriage between these two concepts. There is also a large population of curlers that are older so making it minimalist with a strong focus on accessibility was paramount in this project. I also went for slightly muted colours to give it a slight ‘beer-league’ effect, making it friendly and different.`
               },
               {
                   title: 'Graphic Design',
                   content: `After the Design System was done, Pebble needed branding. I was tasked with creating a logo and brand identity. In its initial stages, I played with the idea of the logo being a triangle mosaic of a curling target. It would make it easy to use triangles in all sorts of visual components. It was decided that the style did not fit the rest of the theme and I went simpler. The final version of the logo is a very friendly, simple graphic depicting the name ‘pebble’ with the ‘E’ as a curling rock. Much like the story of pebble, the logo is simple, friendly, and fun.`
               }
           ],
           /**
            * The color of the 'X' button in the top-right corner. This corresponds to the name of one of the colors in ./color.js. i.e. 'slate' would make the X #2e2a21
            */
           xColor: 'white'
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
           pictureLeft: '50%',
           pictureTop: '50%',
           pictureWidth: '150%',
           description: `The Community Counselling Centre is a Non-Profit Organization that offers ‘low-barrier’ counselling services to anyone who needs it. They are a partner of the University of Northern British Columbia’s Counselling Master’s Program; offering hands on experience to students finishing their practicum.  I approached the CCC with an offer to perform a full-scale re-design of their website including UX Research, UI Development, Content Design, and Website Development.
           After customer research, I realized that my task for the CCC was based around the question, ‘How might we adjust the CCC’s online presence to make first point of contact simple for clients?’ Thus, I redesigned site’s IA, User Interface and Content to reduce barriers for clients.`,
           paragraphs: [
               {
                   title: 'Information Architecture (IA)',
                   content: `How the information on the website is presented is ket to lowering barriers for clients trying to access help. After doing user research, I realized that there are two types of people using counselling sites. One knows that they want help for sure, and the other is still deciding on whether they need help or not. Thus, I added a primary and secondary button that made it easy to navigate to the part of the website each type of user is trying access instantly.`
               },
               {
                   title: 'User Interface Design',
                   content: `The CCC already has a design strategy that they preferred to use. Given that, my work on the UI had a lot more to do with making it calming, competent, and easy to user/look at. I made the main elements look like leaves of a lotus flower (the CCC’s symbol), I used calming gradients, and i based all of the visuals around hands reaching out for help. Our hands are such powerful indicators of our emotions. They are a powerful way of showing emotion and strength`
               },
               {
                   title: 'Content Design',
                   content: `Like most counselling centres, the CCC has a long waiting list. One of the largest barriers to finding mental health help is dealing with the pure volume of other clients who also need help. I came up with the idea to create a page specifically designed for people on the waitlist who need access to help immediately. This page includes videos with basic counselling strategies, links to other forms of help, written directions for emergency situations and access to the contact page for urgent matters.`
               },
            //    {
            //        title: 'Development',
            //        content: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante`
            //    }
           ],
           xColor: 'white'
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
           pictureLeft: '50%',
           pictureTop: '50%',
           pictureWidth: '200%',
           description: `Darkhorse Emergency is an offshoot of the Edmonton, AB based company Darkhorse Analytics. Darkhorse Emergency provides analytics to many Canadian first response units such as Fire Services and Ambulances. My UX Team and I were tasked with a total design overhaul of their Deployment tool which is mainly used for planning and lobbying for funds to stakeholders. I was tasked with redesigning the dashboard.`,
           paragraphs: [
               {
                   title: 'Research',
               content: `Darkhorse Emergency knew that their current application was unclear and somewhat ‘janky’. My first order of business was to conduct a Heuristics Analysis on the dashboard. After this, my team and I ran Card Sorting Workshops with potential users and analysts from the company to gain some generative knowledge on how we might empower new users and onboard them in an intuitive and accessible way.`
           },
           {
               title: 'User Interface Design',
               content: `The data from the users as well as Darkhorses Analyst suggested that the Statistics and Drop Down menus were in the wrong places so I swapped them to be more intuitive.  I put the statistics on the top of the app where they will be viewed first, then I put the drop down menus on the side. We also added a much more visible Compare Button as that it now one of the main features of the app. It allows users to contrast and compare scenarios easily.`
           },
           {
               title: 'Accessibility and Placement',
               content: `In the final iteration of this design, you can see that all of the colour and buttons have been designed and put into place. This version meets all accessibility standards as well as needs very little explanation for new users. All of the main actions a user can do are found on the left side of the page while the statistics are found up top. It clearly encourages users to add a station or compare the scenario that they have created. Then they can filter their results on the upper right corner of the screen beside the statistics.`
           }
           ],
           xColor: 'slate'
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
           position: '50% 70%',
           pictureLeft: '50%',
           pictureTop: '35%',
           pictureWidth: '160%',
           description: `Above are a collection of recent graphics and logos that I have created for various projects. In an effort to expand my skillset, I offer graphic design services to companies and individual entrepreneurs. I am passionate about small business and I like to make an effort to be involved when I can. Each of these are small businesses that I have created full redesigns of their brands. `,
           paragraphs: [
               {
                   title: 'Pebble Logo (Left)',
                   content: `Pebble has its own section of my portfolio but I felt it was important to highlight the logo. Pebble is a curling app that needs to be usable and friendly. We were aiming for it to be fun and useful. The logo represents the lowercase ‘e’ in ‘pebble’ as well as a curling rock. I made sure that the colours were energetic and fun. The shapes are rounded and friendly. It is easy to add it into the full name of the brand as well as it can stand on it’s own as a brand mark. This makes it versatile and easy to use.`
               },
               {
                   title: 'The Chevys Re-Brand (Middle)',
                   content: `The Chevys are a Rockabilly band from Northern BC. I have a soft spot for the entertainment industry as I have a background in bands and songwriting myself. This job was a no-brainer for me. The Chevys’ main demographic is older males who live in Northern BC. They tend to be into cars, live music and beer. I designed their poster to be an old school chevy driving through a snowy forest. I imagine that it is the band driving the car to a gig in the north somewhere.`
               },
               {
                   title: 'Vanessa Francia Logo (Right)',
                   content: `Vanessa Francia is a Architectural Drafter from Burnaby, BC. She enlisted me to design her portfolio and logo to help showcase her blueprints to clients. When designing her logo, I found that drafters need to show that they are able to interpret architectural design with extreme precision and clarity. Her logo needed to have elements of all of that in it plus the added element of speed. I came up with the logo above. A drafting compass with speed lines that creates her initials.`
               }
           ],
           xColor: 'white'

       }
       
   },
//    ux_writing: {
      
//        card: {
//            title: 'UX Writing',
//            content: `A collection of UX Writing I have created for various projects. This collection includes blogs, pop ups, website content, content design.`,
//            picture: 'ux_writing_example.png',
//            alt: 'UX Writing example'
//        },
//        expanded: {
//            title: 'UX Writing',
//            picture: 'ux_writing_example.png',
//            alt: 'UX Writing example',
//            position: '50% 50%',
// pictureLeft: '50%',
// pictureTop: '50%',
// pictureWidth: '150%',
            // xColor: 'white'
//        }
       
//    }
}

