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
      url: 'https://youlook.ru',
      picture: 'youlook',
      contribution: 'Cloud video surveillance service',
      responsibility: ['Improving main code logic', 'Adding new functional'],
      techList: ['Java 6', 'SonarCube', 'Tomcat', 'AngularJS']
    },
    {
      title: 'Cloud solution for VIVO Brazil company',
      url: '',
      picture: 'vivobrazil',
      contribution: '[Team Lead] Cloud solution to form quote new B2B customer',
      techList: ['Java 8', 'Spring Boot', 'Elastic', 'Kafka', 'Spring Reactor', 'Spring Boot', 'Axen Framework', 'Angular', 'Openshift']
    },
    {
      title: 'B2B/B2C solution for Telecom Malaysia',
      url: '',
      picture: 'telecommalaysia',
      contribution: '[Team Lead] Full-stack solution with Customer Portal (Liferay/Java/Docker/Angular), Digital Marketplace and Backend on Weblogic server (Inventory/Order management/ Customer Information Management / Contract management functional)',
      techList: ['Java 8', 'Spring 4', 'Docker', 'Liferay', 'Angular']
    },
    {
      title: 'Voice assistance (Alexa, Alisa) for B2B and B2C customers',
      url: '',
      picture: 'alexa',
      contribution: '[Product owner/ Contributor] The solution is to demonstrate the possibilities of internal systems with conjunction voice assistance (Alexa, Alisa).',
      techList: ['Java 11', 'Spring boot', 'Vaadin', 'Heroku', 'Amazon Alexa API']
    },
    {
      title: 'BSS/OSS solution for international Telecom companies',
      picture: 'netcracker',
      contribution: 'Creation of new functionality for large international companies',
      techList: ['GWT', 'Java', 'Spring Boot', 'Docker']
    },
    {
      title: 'Loyalty service in Yandex Market',
      url: 'https://market.yandex.ru',
      picture: 'yandex_market',
      contribution: 'Service for applying a lot of loyalty mechanics for users (cashback, promo, coupon etc.). High availability service. More 20 nodes into 4 datacenters. Distributed Database.',
      responsibility: ['Team member'],
      techList: ['Java 11', 'Spring Framework 5', 'QueryDSL', 'Liquibase', 'Memcache', 'Postgres']
    },
    {
      title: 'TESCO Finance domain project',
      url: 'https://www.tesco.com',
      picture: 'weigandt',
      contribution: 'Services for processing customers payment actions (processing, validation, generation statistics)',
      responsibility: ['Team member'],
      techList: ['Java 11', 'Spring Boot', 'Hibernate', 'Postgres', 'Kafka', 'Azure Cloud', 'Docker', 'Kubernetes', 'Splunk', 'Jenkins', 'Git']
    },
    {
      title: 'Prepare new team member in education centre NC',
      url: 'https://sar.edu-netcracker.com/',
      picture: 'netcracker',
      contribution: 'Developing process from lecturing to writing a full-fledged project and hiring.'
    },
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
