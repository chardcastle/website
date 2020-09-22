import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const myTitle = 'Chris Hardcastle';

const appContent = {
  appTitle: myTitle,
  appDescription: `${myTitle} is a software development engineer`,
  appAuthor: myTitle,
  ogTitle: myTitle,
  ogType: 'website',
  ogUrl: publicRuntimeConfig.siteUrl,
  ogImage: `${publicRuntimeConfig.siteUrl}/img/profile.png`,
  ogDescription: `${myTitle} is a senior software developer from the UK`,
  titleAbout: 'About',
  titleCvPDF: 'CV (PDF)',
  titleExperience: 'Experience',
  titleTechnologies: 'Technologies',
  titleServices: 'Services',
  splashTitle: 'Software Engineer',
  splashHeadlineOne: 'PHP / Node.js',
  splashHeadlineTwo: 'API / Apps',
  splashHeadlineThree: 'Amazon Web Services',
  experiences: [
    {
      title: 'Third Bridge',
      slug: 'third-bridge',
      thumbnail: '/img/experience/thirdbridge.png',
      paragraphs: [
        'As a software development engineer, this role was a transition to a more Node.js orientated role. '
        + 'I used Amazon\'s well architected framework pillars as a guide to creating micro-systems, as a means to defuse a legacy monolith. ',
        'I supported the team in the design and construction of serverless services in Amazon Web Services. '
        + 'These services replaced internal manual workflows and improved communications for one half of their business users. ',
        'These users belonged to the commercial and finance domain of the company. '
        + 'The projects included event driven solutions included usage of publish and subscribe models (AWS SNS/SQS).',
        'I made further use of my experience with multilingual translations and locale handling. ',
        'I provided test coverage, instructions and data sources to technical and non-technical colleagues in the business. '
        + 'Including documentation as standard with swagger OpenAPI, complete with unit testing in frameworks such as jest. ',
        'I was quite active in the team and was part of a self established JavaScript community of practice. ',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'May 2019',
        },
        {
          listTitle: 'Skills / software:',
          listValues: 'Serverless, AWS, Lambda, JavaScript, Node.js, Terraform, CircleCI',
        },
      ],
    },
    {
      title: 'Eagle Eye Solutions',
      slug: 'eagle-eye-solutions',
      thumbnail: '/img/experience/eagleeye.png',
      paragraphs: [
        'As a Senior Developer designing, building and delivering API endpoints and scripts on public API’s within Eagle Eye’s AIR platform. ',
        'I worked on features which handled requests from mobile apps, retail point of sale equipment (EPoS), CRM and retail systems all over the UK.',
        'Leading the team to design, build and deliver a legacy XML based EPoS API within the AIR platform, assisting and supporting the migration of new and existing well known high street retailers to this service. '
        + 'I then expanded the solution to include EES digital wallet products and consumer search for JDSports. ',
        'Writing console based scripts to import coupon and consumer data for clients such as Thomas Pink and Clarks. '
        + 'Other scripts I wrote searched for and reported on financial transactions, campaign activity and consumer data.',
        'I was exploring event based technologies such as Rabbit MQ was required to handle the extremely high volumes of data and API traffic.',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'August 2016, April 2019',
        },
        {
          listTitle: 'Skills / software:',
          listValues: 'PHP, MySQL, RabbitMQ, JavaScript, Docker, Swagger, JSON',
        },
      ],
    },
    {
      title: 'Splash Worldwide',
      slug: 'splash-worldwide',
      thumbnail: '/img/experience/splash.png',
      paragraphs: [
        'I did a couple of pieces for Splash under contract. '
        + 'The first piece of work as built around a spreadsheet reader. '
        + 'A user could upload a file via the interface that I designed, which was then processed in the API that I built. '
        + 'Some work flow process were built to receive the results of the ingestion. '
        + 'A couple of years later I had some feedback to say that it was still being used to the save them time and money.',
        'Secondly, using my platform integration skills, I was able to connect an hybrid CRM and content system to a third party service. '
        + 'The service translated content for non-English readers. '
        + 'There was a large and workflow process to which the solution needed to support. '
        + 'Due to the test driven nature of the project, many new features could be built to make the process more efficient. '
        + 'Another recent project involved a similar integration, this was with a dynamic email composer. '
        + 'It was a mixture of PHP and Node.js with an ExpressJS backend. '
        + 'I really enjoyed expanding a good piece of software and seeing it enclosed within the clients software when it was completed. ',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'January 2016 to August 2016',
        },
        {
          listTitle: 'Skills / software:',
          listValues: 'Yii (PHP), HTML, CSS, PHPExcel, Composer, GIT',
        },
      ],
    },
    {
      title: 'BAFTA',
      slug: 'bafta',
      thumbnail: '/img/experience/bafta.png',
      paragraphs: [
        'Lead Developer building a front-end single page application prototype for a digital MVP.',
        'Also assisted with API and Amazon AWS infrastructure as a service, along with a ReactJS based technical spike and proposal.',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'January 2016 to August 2016 (contract)',
        },
        {
          listTitle: 'Skills / software',
          listValues: 'ReactJS, Flux, AWS, BackboneJS, RequireJS, UnderscoreJS, GIT, Scrum, Vagrant, Symfony 2, PHPUnit, Mocha, Selenium',
        },
      ],
    },
    {
      title: 'Net Efficiency',
      slug: 'net-efficiency',
      thumbnail: '/img/experience/belron.png',
      paragraphs: [
        'Responsible for the development towards the UK Autoglass website which delivered an optimised version for mobile devices and tablets. '
        + 'It’s the number one site for vehicle glass repair and replacements. '
        + 'I styled the customer portal in which customers can manage their online appointments. '
        + 'I built the landing page in which customers specify the vehicle glass damage. '
        + 'I was instrumental in solving some design and functionality issues in this area and produced some of the graphics myself. '
        + 'I enjoyed working with the team and on my own as lead on another project providing content for closed UK Autoglass branch pages. '
        + 'I also mastered some GIT development cycle processes including deployment, '
        + 'branch management and became interested in automated testing and continuous integration.',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'March 2015 - December 2015 (contract)',
        },
        {
          listTitle: 'Skills / software',
          listValues: 'PHP 5, Zend version 1 and 2, Composer, MySQL, GIT, HTML, CSS, jQuery',
        },
      ],
    },
    {
      title: 'General Optical Council',
      slug: 'general-optical-council',
      thumbnail: '/img/experience/goc.png',
      paragraphs: [
        'I was the lead developer on an e-learning management platform for the General Optical Council. '
        + 'This included the design, development, testing and support of new features for around 20 thousand active users. '
        + 'This also included a range of amends to existing features. '
        + 'The system covered all UK GOC registered opticians and helped the client determine who is inline with their legal obligations. '
        + 'The project was written in YII, I added lots of extra functionality after it was launched in 2013. '
        + 'I led the system through annual reporting years, ad hoc development and user support enquiries. '
        + 'With documentation, design, reporting, database design and management included. '
        + 'Included project to include a change in overnight synchronisation with a new Microsoft CRM system. '
        + 'This was achieved with my PHP provided as custom classes and modules within the YII framework along with database deltas that managed changes. ',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'June 2013 – February 2015 (1 year 9 months)',
        },
        {
          listTitle: 'Skills / software',
          listValues: 'YII (PHP), MySQL, SVN',
        },
      ],
    },
    {
      title: 'emotive (Global Healthcare Communications Agency)',
      slug: 'emotive',
      thumbnail: '/img/experience/emotive.png',
      paragraphs: [
        'There\'s a number of really interesting projects that I took with emotive:'
        + 'Augmentin, dosage browser app: Using BackboneJS and UnderscoreJS, I built a Javascript based iPhone app for a client that manufactured a drug called Augmentin. '
        + 'It included user interaction feature in the style and design of a bathroom scale. '
        + 'A slider could be used to display dosage data in real time. '
        + 'The work was wrapped up in Cordova for over the air installations on iPhone and Android devices. '
        + 'It was intended as promotional material for doctors in support of the brand. My skills with Backbone were instrumental in providing a manageable and flexible framework for all the JavaScript dependencies of this project.'
        + 'CMS / Budget impact model API and Reporting: My skills and experience of SVG, Adobe and PHP allowed me to develop a mini infographic framework that could produce pixel perfect reports. '
        + 'I used PHP to populate SVG templates with data to manipulate the size and position of various chartable elements such as bar and pie charts. '
        + 'I worked closely with designers who supplied me with SVG from Adobe Illustrator to the desired technical specification, I was able to use these as templates to stage dynamic data to generate PDF files that could then be shared via email service that I built.'
        + 'Multistore: I was the lead developer, the project was forked from OpenCart and was for a pharmaceutical company. '
        + 'It was used to populate a custom built eDetailer app on iPads. '
        + 'It was the web service that synchronised the product catalogue and received packages of information from the user. '
        + 'The user would be able to browse, select and then progress with a request as a shopper would on a site under a checkout model - similar that of an Ecommerce website. '
        + 'There was heavy customisation on this with lots of collaboration with content owners and the app developer. '
        + 'It was a very cathartic and enjoyable experience.',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'June 2013 – February 2015 (1 year 9 months)',
        },
        {
          listTitle: 'Skills / software:',
          listValues: 'Angular JS, BackboneJS, RequireJS, UnderscoreJS, Cordova (Phone Gap), Wordpress, OpenCart, MySQL, Google API, SVN',
        },
        {
          listTitle: 'Clients:',
          listValues: 'Eylea, Bayer, Sativex, EMD Serono',
        },
      ],
    },
  ],
  stack: {
    primary: [
      'I now code mostly in node.js for AWS lambda\'s',
      'I enjoy using Laravel, Symfony PHP frameworks',
      'I know and use, Next.js, Serverless, Zend, Yii and Wordpress',
      'I compile LESS or SASS for CSS and I write HTML with SEO in mind',
      'I use and build RESTful APIs suitable for AWS and GCP',
    ],
    secondary: [
      'I enjoy using Javascript to create web based single page applications',
      'I use Browserify or Webpack alongside modern task runners',
      'I use GIT on the terminal with GitHub and BitBucket accounts',
      'I use Docker containers for local development',
      'I Behat, Gerkin, PHPUnit for testing',
    ],
  },
  services: {
    affirmations: [
      'Used to working in an Agile Scrum or Kanban team',
      'Have experience of software development and release cycles',
      'A creative photoshop user with interests in art and design',
      'An aspiring guitar player',
      'A beer loving father and family man',
    ],
    abilities: [
      'Write and maintain modern, robust and testable computer programming',
      'Write and maintain unit, integration and acceptance tests for quality assurance',
      'Deliver sprint goals, refine stories and provide estimates',
      'Provide Front and Back-end (API) design, development and maintenance',
      'Integrate or build custom and product digital solutions and services',
    ],
    knowledge: [
      'A range of open-source programming languages and frameworks',
      'Digital loyalty programs, campaigns and schemes',
      'Version control, release workflow and deployment strategies',
      'Social media and have domain knowledge for banking, automotive and pharmaceutical industries',
      'Server maintenance, software and infrastructure as a service',
    ],
  },
  about: 'I\'m a highly experienced, agile and knowledgeable senior software engineer,'
    + 'with more than 10 years commercial expertise, providing both front and back-end '
    + 'development services for digital products on mobile, EPoS and desktop devices.',
  footer: {
    copyright: 'Copyright',
    signature: `${myTitle} 2020`,
    location: 'London, UK',
  },
};

export default appContent;
