(() => {
  const careerStartDate = new Date('2013-12-23');
  const currentDate = new Date();
  const experience = Math.round(currentDate.getFullYear() - careerStartDate.getFullYear());
  const now = {
    year: currentDate.getFullYear(),
    month: 12
  }
  const iconsSizes = [16, 48, 72, 76, 96, 120, 128, 144, 152, 180, 192, 256, 384, 512];
  const contacts = [
    {
      url: 'tel:+79878100807',
      label: 'Phone',
      iconClass: 'phone.svg',
      text: '+7 987 810 08 07'
    },
    {
      url: 'mailto:khamitov.rail.r@gmail.com',
      label: 'Email',
      iconClass: 'email.svg',
      text: 'khamitov.rail.r@gmail.com'
    },
    {
      url: 'https://github.com/mshassium',
      label: 'GitHub',
      iconClass: 'github.svg',
      text: 'GitHub',
      fullText: 'github.com/mshassium'
    },
  ];
  const projects = [
    {
      title: 'YouLook',
      url: 'https://youlook.ru/)',
      picture: 'html-practice',
      contribution: 'Cloud video surveillance service',
      responsibility: ['Improving main code logic', 'Adding new functional'],
      techList: ['Java 6', 'SonarCube', 'Tomcat', 'AngularJS']
    },
    {
      title: 'Cloud solution for VIVO Brasil company',
      url: '',
      picture: 'material-theme-creator',
      contribution: '[Team Lead] Cloud solution to form quote new B2B customer',
      responsibility: [],
      techList: ['Java 8', 'Spring Boot', 'Elastic', 'Kafka', 'Spring Reactor', 'Spring Boot', 'Axen Framework', 'Angular', 'Openshift']
    },
    {
      title: 'B2B/B2C solution for Telecom Malaysia',
      url: '',
      picture: 'samuraijs',
      contribution: '[Team Lead] Full-stack solution with Customer Portal (Liferay/Java/Docker/Angular), Digital Marketplace and Backend on Weblogic server (Inventory/Order management/ Customer Information Management / Contract management functional)',
      responsibility: [],
      techList: ['Java 8', 'Spring 4', 'Docker', 'Liferay', 'Angular']
    },
    {
      title: 'Voice assistance (Alexa, Alisa) for B2B and B2C customers',
      url: '',
      picture: 'simple-date-parser',
      contribution: '[Product owner/ Contributor] The solution is to demonstrate the possibilities of internal systems with conjunction voice assistance (Alexa, Alisa).',
      responsibility: [],
      techList: ['Java 11', 'Spring boot', 'Vaadin', 'Heroku', 'Amazon Alexa API']
    },
    {
      title: 'Prepare new team member in education centre NC',
      url: 'https://sar.edu-netcracker.com/',
      picture: 'qpalette',
      contribution: 'Developing process from lecturing to writing a full-fledged project and hiring.',
      responsibility: [],
      techList: []
    },
    {
      title: 'BSS/OSS solution for international Telecom companies',
      picture: 'kaspersky',
      contribution: '',
      responsibility: [],
      techList: ['Angular', 'TypeScript', 'WebSocket']
    },
    {
      title: 'WebSocket Post Server',
      url: 'https://github.com/Artik-Man/ws-post-server',
      picture: 'wsps',
      contribution: '[Personal project] Back end development of simple WebSocket Server',
      techList: ['Node.js', 'WebSocket', 'Express.js']
    },
    {
      title: 'Hiddens',
      url: 'https://github.com/Artik-Man/hiddens',
      picture: 'hiddens',
      contribution: '[Personal project] Front end development of simple chat, based on WebSocket Post Server',
      techList: ['Angular', 'WebSocket', 'Hammer.js']
    },
    {
      title: 'Kaspersky Lab: Managed Protection',
      picture: 'kmp',
      contribution: 'Front end development of threat-hunting sequrity service.',
      techList: ['Angular', 'TypeScript', 'Webpack']
    },
    {
      title: 'Hashboard cabinet',
      url: 'https://new.hashboard.ru/cabinet/',
      picture: 'hashboard-cabinet',
      contribution: 'Front end development of #hashboard service. This web application uses client-side localization, HTML5 Audio/Video, the combination of AngularJS + RequireJS + REST API.',
      techList: ['AngularJS', 'RequireJS', 'REST']
    },
    {
      title: 'Hashboard player',
      url: 'https://new.hashboard.ru/play/?login=artik@hb.ru',
      picture: 'hashboard-player',
      contribution: 'Front end development of #hashboard service. This web application uses HTML5 Video and Audio, handles internet-connection troubles. Web site has a fluid layout.',
      techList: ['jQuery', 'RequireJS', 'REST']
    },
    {
      title: 'Hashboard',
      url: 'https://hashboard.ru',
      picture: 'hashboard',
      contribution: 'Front end development of #hashboard service. Cross-browser code, responsive layout, Website localization.',
      techList: ['jQuery', 'Bootstrap', 'LESS']
    },
    {
      title: 'Pricereporter',
      url: 'http://primepix.ru/portfolio/mgrabber/',
      picture: 'pr',
      contribution: 'Front end web development and technical support of a commercial site',
      techList: ['jQuery', 'Bootstrap', 'Bitrix']
    },
    {
      title: 'Artik.me',
      url: 'https://github.com/Artik-Man/artik.me',
      picture: 'artik',
      contribution: '[Personal project] Full cycle of development of web page: from design to caching with ServiceWorker',
      techList: ['SamuraiJS', 'ServiceWorker', 'CSS Custom Properties']
    }
  ];
  const lifeline = [
    {
      title: 'Saratov State University',
      url: 'https://www.sgu.ru/',
      text: `
    <p>Faculty of Computer Science and Information Technologies</p>
    <p><b>Bachelor's degree</b></p>
    `,
      from: {year: 2011, month: 9},
      to: {year: 2015, month: 8}
    },
    {
      title: 'Soft Dynamics',
      url: 'https://youlook.ru',
      text: '<p>Junior System Administrator / Junior Java Developer</p>',
      from: {year: 2012, month: 11},
      to: {year: 2013, month: 9},
//      classes: 'no-print'
    },
    {
      title: 'NetCracker',
      url: 'https://www.netcracker.com',
      text: '<p>Junior Java Developer</p>',
      from: {year: 2013, month: 12},
      to: {year: 2014, month: 7}
    },
    {
      title: 'NetCracker',
      url: 'https://www.netcracker.com',
      text: '<p>Middle Java Developer</p>',
      from: {year: 2014, month: 8},
      to: {year: 2015, month: 12}
    },
    {
      title: 'NetCracker',
      url: 'https://www.netcracker.com',
      text: '<p>Senior Java Developer</p>',
      from: {year: 2016, month: 1},
      to: {year: 2018, month: 12}
    },
    {
      title: 'NetCracker',
      url: 'https://www.netcracker.com',
      text: '<p>Team Lead</p>',
      from: {year: 2019, month: 1},
      to: {year: 2020, month: 8}
    },
    {
      title: 'Yandex',
      url: 'https://yandex.ru',
      text: '<p>Java Developer</p>',
      from: {year: 2020, month: 10},
      to: {year: 2021, month: 11}
    },
    {
      title: 'Weigandt Consulting',
      url: 'https://weigandt-consulting.com',
      text: '<p>Senior Java Developer</p>',
      from: {year: 2021, month: 11},
      to: now
    }
  ];
  const yMin = Math.min(...lifeline.map(p => p.from.year));
  const yMax = Math.max(...lifeline.map(p => p.to.year));
  const years = new Array(yMax - yMin + 1).fill(0).map((x, i) => yMax - i);
  const months = `January,February,March,April,May,June,July,August,September,October,November,December`.split(',');
  const meta = {
    title: 'Khamitov Rail\' — Java software engineer',
    full_name: 'Khamitov Rail\'',
    name: 'Rail\'',
    description: `Java software engineer with over ${experience} years of experience. Current stack: Java16 + Spring Framework + Kafka + Microsoft Azure`,
    url: 'https://artik.me',
    card: 'assets/images/icons/card.png',
    color: '#10272f'
  };

  return {
    meta,
    iconsSizes,
    contacts,
    projects,
    experience,
    lifeline,
    years,
    months,
    now
  }

})()
