import getConfig from 'next/config';
import { ucFirst } from './stringUtility';

const { publicRuntimeConfig } = getConfig();

const myTitle = 'Chris Hardcastle';
const stackSplitStatement = 'split 70% to 30% in favour of the server-side';

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
      isVisible: true,
      slug: 'third-bridge',
      thumbnail: '/img/experience/thirdbridge.png',
      paragraphs: [
        'As a software development engineer, this role was a transition to a more Node.js orientated role. '
        + 'I used Amazon\'s well architected framework pillars as a guide to creating micro-systems, as a means to defuse a legacy monolith. ',
        'I supported the team in the design and construction of serverless services in Amazon Web Services. '
        + 'These services replaced internal manual workflows and improved communications for one half of their business users. '
        + 'The technical solutions included event driven features which published and consumed event messages (AWS SNS/SQS). '
        + 'They were built to lint in ECMAScript 5 or 6 and deployed via CI/CD pipelines. '
        + 'The users of these services belonged to the commercial and finance domain of the company. ',
        'I provided test coverage, instructions and data sources to both technical and non-technical colleagues in the business. '
        + 'Including documentation as standard with swagger OpenAPI, complete with unit testing in frameworks such as Jest.',
        'Beyond the team, with other developers in the business, I helped establish a JavaScript community of practice for the engineering department. '
        + 'I also held a voluntary role as a "security champion" in a team focused on nurturing a security culture within the business. '
        + 'This was a great exercise and exploration of the OWASP top 10 security threats.',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'May 2019',
        },
        {
          listTitle: 'Skills / software:',
          listValues: 'Node.js, Serverless, AWS, Lambda, Docker, React, JavaScript, Jest, POEdit, Terraform, CircleCI, Jenkins',
        },
      ],
    },
    {
      title: 'Eagle Eye Solutions',
      isVisible: true,
      slug: 'eagle-eye-solutions',
      thumbnail: '/img/experience/eagleeye.png',
      paragraphs: [
        'As a Senior Developer designing, building and delivering API endpoints and scripts on public API’s within Eagle Eye’s AIR platform. ',
        'I worked on PHP API\'s which handled requests from mobile apps, retail point of sale equipment (EPoS), CRM and retail systems all over the UK. '
        + 'During this time I became interested in event based technologies such as Rabbit MQ was required to handle the extremely high volumes of data and API traffic.',
        'I led the design, build and delivery of an legacy XML based EPoS API within their AIR platform, assisting '
        + 'and supporting the migration of new and existing well known high street retailers to this service. '
        + 'I extended the solution to include EES digital wallet products and consumer search for JDSports.',
        'I wrote a number of console based scripts to import coupon and consumer data for clients such as Thomas Pink and Clarks. '
        + 'I was responsible for the migration of extremely valuable PII and stored value (financial) data. '
        + 'I was obliged to adopt rigorous habits towards maintaining ISO/IEC 27001 (information security) compliance.',
        'Remaining duties included the creation of features to report on financial transactions, campaign activity and consumer data.'
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
      isVisible: true,
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
      isVisible: false,
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
          listTitle: 'Skills / software:',
          listValues: 'ReactJS, Flux, AWS, BackboneJS, RequireJS, UnderscoreJS, GIT, Scrum, Vagrant, Symfony 2, PHPUnit, Mocha, Selenium',
        },
      ],
    },
    {
      title: 'Net Efficiency',
      isVisible: true,
      slug: 'net-efficiency',
      thumbnail: '/img/experience/belron.png',
      paragraphs: [
        'Responsible for the development towards the UK Autoglass website, this delivered an optimised version for mobile devices and tablets. ',
        'Autoglass is the number one site for vehicle glass repair and replacements. '
        + 'I styled the customer portal in which customers can manage their online appointments. '
        + 'I built the landing page in which customers specify the vehicle glass damage. '
        + 'I was instrumental in solving some design and functionality issues in this area and produced some of the graphics myself. ',
        'I enjoyed working with the team and on my own as lead on another project providing content for closed UK Autoglass branch pages. '
        + 'I also mastered some GIT development cycle processes including deployment, '
        + 'branch management and became interested in automated testing and continuous integration.',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'March 2015 - December 2015 (contract)',
        },
        {
          listTitle: 'Skills / software:',
          listValues: 'PHP 5, Zend version 1 and 2, Composer, MySQL, GIT, HTML, CSS, jQuery',
        },
      ],
    },
    {
      title: 'General Optical Council',
      isVisible: true,
      slug: 'general-optical-council',
      thumbnail: '/img/experience/goc.png',
      paragraphs: [
        'I was the lead developer on an e-learning management platform for the General Optical Council. ',
        'This role included the design, development, testing and support of new features for around 20 thousand active users. '
        + 'The project was written in YII (PHP) and originally launched in 2013. '
        + 'I added lots of extra functionality and amended other areas as specified. '
        + 'This platform served all UK GOC registered opticians and helps them meet annual targets required for active registration. ',
        'I led the system through annual reporting years, ad hoc development and user support enquiries. '
        + 'With documentation, design, reporting, database design and management included. ',
        'I also assisted with a change in overnight synchronisation with Microsoft CRM system. '
        + 'This was achieved with custom PHP classes and modules within the YII framework along with database deltas that managed changes. ',
      ],
      lists: [
        {
          listTitle: 'Date:',
          listValues: 'June 2013 – February 2015 (1 year 9 months)',
        },
        {
          listTitle: 'Skills / software:',
          listValues: 'YII (PHP), MySQL, SVN',
        },
      ],
    },
    {
      title: 'emotive (Global Healthcare Communications Agency)',
      isVisible: true,
      slug: 'emotive',
      thumbnail: '/img/experience/emotive.png',
      paragraphs: [
        'There\'s a number of really interesting projects that I took with emotive:',
        'Augmentin, dosage browser app: Using BackboneJS and UnderscoreJS, I built a Javascript based iPhone app for a client that manufactured a drug called Augmentin. '
        + 'It included user interaction feature in the style and design of a bathroom scale. '
        + 'A slider could be used to display dosage data in real time. '
        + 'The work was wrapped up in Cordova for over the air installations on iPhone and Android devices. '
        + 'It was intended as promotional material for doctors in support of the brand. My skills with Backbone were instrumental in providing a manageable and flexible framework for all the JavaScript dependencies of this project.',
        'CMS / Budget impact model API and Reporting: My skills and experience of SVG, Adobe and PHP allowed me to develop a mini infographic framework that could produce pixel perfect reports. '
        + 'I used PHP to populate SVG templates with data to manipulate the size and position of various chartable elements such as bar and pie charts. '
        + 'I worked closely with designers who supplied me with SVG from Adobe Illustrator to the desired technical specification, I was able to use these as templates to stage dynamic data to generate PDF files that could then be shared via email service that I built.',
        'Multistore: I was the lead developer, the project was forked from OpenCart and was for a pharmaceutical company. '
        + 'It was used to populate a custom built eDetailer app on iPads. '
        + 'It was the web service that synchronised the product catalogue and received packages of information from the user. '
        + 'The user would be able to browse, select and then progress with a request as a shopper would on a site under a checkout model - similar that of an Ecommerce website. '
        + 'There was heavy customisation on this with lots of collaboration with content owners and the app developer. ',
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
      'I like to use Node.js in AWS lambda functions',
      'I can use Laravel, Symfony and other PHP frameworks',
      'I use database solutions such as MySQL, RDS and Redis',
      'I use and build RESTful APIs',
      'I compile CSS with modern preprocessors',
    ],
    secondary: [
      'I like to web based single page applications (Apps)',
      'I use or create graphics using editors such as photoshop',
      'I use the terminal for git, AWS orchestration, CI/CD and server admin',
      'I use Docker containers and unit tests for local development',
      'I express requirements in Gerkin and test against them using Behat',
    ],
  },
  services: {
    affirmations: [
      `${ucFirst(stackSplitStatement)}`,
      'Used to working in a Agile Scrum or Kanban team',
      'Experienced in software development and release cycles',
      'A creative photoshop user with interests in art and design',
      'A beer loving, musician, father and family man',
    ],
    abilities: [
      'Write and maintain modern, robust and testable computer programming',
      'Write and maintain unit, integration and acceptance tests for quality assurance',
      'Deliver sprint goals, refine stories and provide estimates',
      'Provide Front and Back-end (API) design, development and maintenance',
      'Integrate or build custom and product, digital solutions and services',
    ],
    knowledge: [
      'A range of open-source programming languages and frameworks',
      'Digital loyalty programs, campaigns and schemes',
      'Version control, release workflow and deployment strategies',
      'Domain knowledge for finance, social media, automotive and pharmaceutical industries',
      'Server maintenance, software and infrastructure as a service',
    ],
  },
  about: {
    firstParagraph: 'In terms of "full stack" (both front/back-end or UX/server-side) development. '
    + `I'd say, by ability, I'm between ${stackSplitStatement}. `
    + 'I\'m presently expanding my knowledge to serverless, terraform and CircleCI as means to provide another facet to my stack.',
    secondParagraph: 'I come from Yorkshire originally where I studied in graphic, media communications (BA Hons). '
    + 'Beyond coding, I\'m really interested in mind models and Physiology. My other passions are family, yoga and playing the guitar. '
    + 'I built this site in Next.js (React JavaScript), any feedback is welcome. Thanks for reading.',
  },
  footer: {
    copyright: 'Copyright ',
    signature: `${myTitle} ${(new Date()).getFullYear()}`,
    location: 'London, UK',
  },
};

export default appContent;
